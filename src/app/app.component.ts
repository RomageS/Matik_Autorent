import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Matik_Autorent';
  currentLanguage: 'english' | 'spanish' = 'spanish';

  changeLanguage(language: 'english' | 'spanish') {
    this.currentLanguage = language;
    localStorage.setItem('language', language); // Guardar preferencia del usuario
    ngOnInit() {
      const savedLanguage = localStorage.getItem('language') as 'english' | 'spanish';
      if (savedLanguage) {
        this.currentLanguage = savedLanguage;
      }
    }
  }
  }
