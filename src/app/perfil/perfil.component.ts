import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';

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

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    this.apiService.getUserProfile().subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (err) => {
        console.error('Error al cargar el perfil del usuario:', err);
      }
    });
  }
}
