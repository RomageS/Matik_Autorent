import { Component } from '@angular/core';
import { SesionEnglishComponent } from '../sesionenglish/sesion-english.component';

@Component({
  selector: 'app-header-english',
  templateUrl: './header-english.component.html',
  styleUrl: './header-english.component.css'
})
export class HeaderEnglishComponent {
  isLoggedIn: boolean = false; // Variable para verificar si el usuario está autenticado.

  constructor( ) {}

  // Simula el inicio y cierre de sesión para pruebas.
  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
