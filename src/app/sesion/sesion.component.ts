import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { UserService } from '../servicios/user.service';

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
    private userService: UserService,
    private router: Router
  ) {}

  onSubmit() {
    this.userService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Inicio de sesión exitoso:', response);

        // Guarda el estado de sesión y el rol del usuario en localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userRole', response.role); // Guarda el rol del usuario

        this.modalService.dismissAll(); // Cierra el modal
        console.log('Modal cerrado con dismissAll');
      },
      error: (err) => {
        console.error('Error en el inicio de sesión:', err);
        alert('Credenciales incorrectas');
      }
    });
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
    isAdmin(): boolean {
      return localStorage.getItem('userRole') === 'ADMIN';
    }
    
    isUser(): boolean {
      return localStorage.getItem('userRole') === 'USER';
    }
  

  logout() {
    localStorage.removeItem('isLoggedIn'); // Limpia el estado de sesión
    this.router.navigate(['']); // Redirige al inicio o página principal
    console.log('Sesión cerrada');
  }

  goToAdminPanel() {
    this.router.navigate(['dashboard']); // Ruta para administradores
  }
  
  goToUserProfile() {
    this.router.navigate(['perfil']); // Ruta para usuarios normales
  }

  openLoginModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    console.log('Modal abierto:', this.modalRef);
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
