import 'dotenv/config';
import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

// Middleware to parse JSON bodies
app.use(express.json());

/**
 * 🔒 SECURE TELEGRAM PROXY API
 * Reads bot token and chat id from ENVIRONMENT VARIABLES (Docker)
 */
app.post('/api/contact', async (req, res) => {
  const { name, email, message, projectType, budget } = req.body;
  const botToken = process.env['TELEGRAM_BOT_TOKEN'];
  const chatId = process.env['TELEGRAM_CHAT_ID'];

  if (!botToken || !chatId) {
    console.error('❌ Environment variables TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID are MISSING.');
    return res.status(500).json({ error: 'Configuración de servidor incompleta.' });
  }

  // Simple mapping for human-readable labels in Telegram
  const typeMap: Record<string, string> = {
    'SAAS': 'SaaS / Plataforma',
    'MOBILE': 'App Mobile',
    'ECOMMERCE': 'E-commerce',
    'FINTECH': 'FinTech / Web3',
    'INFRA': 'Infra / DevOps',
    'OTHER': 'Corporativo / Otro'
  };

  const budgetMap: Record<string, string> = {
    'TIER1': 'Bajo $3k',
    'TIER2': '$3k - $10k',
    'TIER3': '$10k - $25k',
    'TIER4': 'Sobre $25k',
    'TIER5': 'Sociedad / Partnership'
  };

  const labelType = typeMap[projectType] || projectType;
  const labelBudget = budgetMap[budget] || budget;

  const text = `
🆕 *PROPUESTA DE PROYECTO RECIBIDA*

👤 *Cliente:* ${name}
📧 *Email:* ${email}
🏗️ *Tipo:* ${labelType}
💰 *Inversión:* ${labelBudget}

💬 *Desafío:* 
${message}
  `;

  const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'Markdown'
      })
    });

    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      const errData = await response.json();
      console.error('❌ Telegram API error:', errData);
      return res.status(500).json({ error: 'Error al enviar a Telegram.' });
    }
  } catch (error) {
    console.error('❌ Network error sending to Telegram:', error);
    return res.status(500).json({ error: 'Fallo de conexión en el servidor.' });
  }
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) { throw error; }
    console.log(`🚀 Node Express server listening on http://localhost:${port}`);
    console.log(`🔧 Environment: TELEGRAM_BOT_TOKEN is ${process.env['TELEGRAM_BOT_TOKEN'] ? 'SET' : 'NOT SET'}`);
  });
}

export const reqHandler = createNodeRequestHandler(app);
