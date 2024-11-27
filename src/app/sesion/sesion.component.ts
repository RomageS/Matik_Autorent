import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrl: './sesion.component.css'
})
export class SesionComponent {
  email: string = '';
  password: string = '';

  private ValidCredentials = {
    email : "admin",
    contraseña: "1234"
  }

  constructor(
    private modalService: NgbModal,
    private apiService: ApiService,
    private router: Router
  ) {}

  openLoginModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  onSubmit() {
    this.apiService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Inicio de sesión exitoso:', response);
        this.router.navigate(['/dashboard']); // Redirige al dashboard
      },
      error: (err) => {
        console.error('Error en el inicio de sesión:', err);
        alert('Credenciales incorrectas');
      }
    });
  }
  
  redirectToRegister(modal: any) {
    modal.close();
    this.router.navigate(['/src/app/registro/registro.component.html']); // Redirige a la página de registro
  }
}
