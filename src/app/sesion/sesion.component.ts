import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrl: './sesion.component.css'
})
export class SesionComponent {
  email: string = '';
  password: string = '';

  constructor(private modalService: NgbModal) {}

  openLoginModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Lógica adicional para autenticar al usuario
  }
}
