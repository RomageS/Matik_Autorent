import { Component } from '@angular/core';
import { SesionComponent } from '../sesion/sesion.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  
})
export class HeaderComponent {
  isLoggedIn: boolean = false; // Variable para verificar si el usuario está autenticado.

  constructor() {}

  // Simula el inicio y cierre de sesión para pruebas.
  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
