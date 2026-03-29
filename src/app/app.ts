import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('jsojo-portfolio');
  private readonly translate = inject(TranslateService);
  private readonly seo = inject(SeoService);

  // Form Signals
  formData = {
    name: signal(''),
    email: signal(''),
    message: signal('')
  };
  
  isSending = signal(false);
  sentSuccess = signal(false);

  ngOnInit() {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    this.updateSeo();
  }

  /**
   * 🛡️ SECURE SUBMISSION:
   * Calls the local Express Proxy API /api/contact instead of Telegram Bot API directly.
   * This protects the Bot Token and Chat ID.
   */
  async sendToTelegram(event: Event) {
    event.preventDefault();
    this.isSending.set(true);

    const data = {
      name: this.formData.name(),
      email: this.formData.email(),
      message: this.formData.message()
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        this.sentSuccess.set(true);
        // Reset form
        this.formData.name.set('');
        this.formData.email.set('');
        this.formData.message.set('');
        setTimeout(() => this.sentSuccess.set(false), 5000);
      }
    } catch (error) {
      console.error('Error in secure submission', error);
    } finally {
      this.isSending.set(false);
    }
  }

  /**
   * 📋 COPY TO CLIPBOARD:
   * Copies the email address and provides instant visual feedback via Signal.
   */
  async copyEmail() {
    const email = 'josesojo2828@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      const originalState = this.sentSuccess();
      this.sentSuccess.set(true); // Reuse success signal for feedback
      setTimeout(() => this.sentSuccess.set(originalState), 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  }

  private updateSeo() {
    this.seo.updateTags({
      title: 'Jose Sojo | Arquitecto de Software Senior & Lead Engineer',
      description: 'Especialista en Arquitectura de Software, Cloud-Native, Microservicios y Ecosistemas SaaS de alta escalabilidad. Experto en Angular, NestJS, Go y Kubernetes.',
      keywords: 'Architect, Software Engineering, Lead Engineer, Angular 19, NestJS, GoLang, Kubernetes, Docker, FinTech Architecture, SaaS Development, IoT Data, Enterprise Solutions, Jose Sojo'
    });
  }
}
