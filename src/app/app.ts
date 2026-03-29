import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('jsojo-portfolio');
  private readonly translate = inject(TranslateService);
  private readonly seo = inject(SeoService);

  activeLang = signal('es');

  ngOnInit() {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    this.updateSeo();
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    this.activeLang.set(lang);
    this.updateSeo();
  }

  private updateSeo() {
    this.seo.updateTags({
      title: 'Jose Sojo | Software Architect & Digital Craftsman',
      description: 'Senior Software Architect specializing in scalable Angular architectures and cloud-native solutions.',
      keywords: 'Angular, Architecture, Software Engineer, Cloud-native, K8s, TypeScript'
    });
  }
}
