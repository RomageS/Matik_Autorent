import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent {
  email: string = '';
  password: string = '';
  private modalRef?: NgbModalRef; // Referencia al modal activo

  constructor(
    private modalService: NgbModal,
    private apiService: ApiService,
    private router: Router
  ) {}

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  logout() {
    localStorage.removeItem('isLoggedIn'); // Limpia el estado de sesión
    this.router.navigate(['']); // Redirige al inicio o página principal
    console.log('Sesión cerrada');
  }

  goToProfile() {
    this.router.navigate(['/perfil']); // Redirige a la página de perfil
    console.log('Redirigiendo al perfil del usuario');
  }

  openLoginModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    console.log('Modal abierto:', this.modalRef);
  }

  onSubmit() {
    this.apiService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Inicio de sesión exitoso:', response);

        // Guarda el estado de sesión en el almacenamiento local
        localStorage.setItem('isLoggedIn', 'true');

        this.modalService.dismissAll(); // Cierra el modal
        console.log('Modal cerrado con dismissAll');
      },
      error: (err) => {
        console.error('Error en el inicio de sesión:', err);
        alert('Credenciales incorrectas');
      }
    });
  }

  ngOnInit() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      if (this.isLoggedIn()) {
        console.log('Usuario ya autenticado');
      } else {
        console.log('Usuario no autenticado');
      }
    }
  }
}
