import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicios/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user = {
    name: '',
    email: '',
    phone: '',
    address: ''
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    this.userService.getUserProfile().subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (err) => {
        console.error('Error al cargar el perfil del usuario:', err);
      }
    });
  }
}
