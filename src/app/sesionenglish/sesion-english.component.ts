import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sesion-english',
  templateUrl: './sesion-english.component.html',
  styleUrl: './sesion-english.component.css'
})
export class SesionEnglishComponent {
  email: string = '';
  password: string = '';
  router: any;

  private ValidCredentials = {
    email : "admin",
    contraseña: "1234"
  }

  constructor(private modalService: NgbModal) {}

  openLoginModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Lógica adicional para autenticar al usuario
  }
  
  redirectToRegister(modal: any) {
    modal.close();
    this.router.navigate(['/src/app/registro/registro.component.html']); // Redirige a la página de registro
  }
}