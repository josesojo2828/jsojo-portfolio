import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('jsojo-portfolio');
  private readonly seo = inject(SeoService);

  ngOnInit() {
    this.seo.updateTags({
      title: 'Jose Sojo | Software Architect & Digital Craftsman',
      description: 'Senior Software Architect specializing in scalable Angular architectures and cloud-native solutions.',
      keywords: 'Angular, Architecture, Software Engineer, Cloud-native, K8s, TypeScript'
    });
  }
}
