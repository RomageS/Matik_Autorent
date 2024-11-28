import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isLoggedIn: boolean = false; // Variable para verificar si el usuario está autenticado.
  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef; // Referencia al navbar

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.closeNavbar();
    });
  }

  // Método para cerrar el navbar
  closeNavbar() {
    if (this.navbarCollapse.nativeElement.classList.contains('show')) {
      this.navbarCollapse.nativeElement.classList.remove('show');
    }
  }

  // Simula el inicio y cierre de sesión para pruebas.
  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
