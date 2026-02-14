import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- CONFIGURACIÓN SEO MAESTRA ---
export const metadata: Metadata = {
  metadataBase: new URL('https://quanticarch.com'), // Reemplaza con tu dominio personal si tienes uno distinto
  title: {
    default: "Jose Sojo | Software Architect & CEO @ QuanticArch",
    template: "%s | Jose Sojo"
  },
  description: "Portafolio profesional de Jose Sojo. Arquitecto de Software y CEO de QuanticArch. Experto en soluciones escalables, Web3, Cloud Computing y liderazgo técnico.",
  keywords: [
    "Jose Sojo", 
    "Software Architect", 
    "CTO", 
    "QuanticArch", 
    "Desarrollo Web", 
    "Web3", 
    "Blockchain", 
    "Next.js", 
    "Cloud Architecture",
    "Tech Leader"
  ],
  authors: [{ name: "Jose Sojo", url: "https://quanticarch.com" }],
  creator: "Jose Sojo",
  publisher: "QuanticArch",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Configuración para redes sociales (LinkedIn, Facebook, WhatsApp)
  openGraph: {
    title: "Jose Sojo | Software Architect & CEO",
    description: "Transformando visión de negocio en arquitectura técnica robusta. Liderazgo en ingeniería y estrategias digitales.",
    url: 'https://quanticarch.com',
    siteName: 'Jose Sojo Portfolio',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Asegúrate de poner una imagen tuya o de tu marca en public/og-image.jpg (1200x630px)
        width: 1200,
        height: 630,
        alt: 'Jose Sojo - Software Architect',
      }
    ],
  },
  // Configuración para Twitter/X
  twitter: {
    card: 'summary_large_image',
    title: 'Jose Sojo | Architect & CEO',
    description: 'Arquitectura de Software y Liderazgo Técnico @ QuanticArch.',
    creator: '@JoseSojo', // Pon tu usuario real de Twitter si tienes
    images: ['/twitter-image.jpg'], // Puede ser la misma que og-image
  },
  // Instrucciones para Google Bot
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Configuración del Viewport (separado en Next.js 14+)
export const viewport: Viewport = {
  themeColor: '#0f172a', // Coincide con el color Slate-900 de tu footer
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Importante: lang="es" para SEO en español
    <html lang="es" className="scroll-smooth"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}