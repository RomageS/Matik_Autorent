import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicios/user.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    const userId = this.route.snapshot.paramMap.get('id'); // Obtiene el ID de la URL
    if (userId) {
      this.userService.getUserById(Number(userId)).subscribe({
        next: (data) => {
          this.user = data;
        },
        error: (err) => {
          console.error('Error al cargar el perfil del usuario:', err);
        }
      });
    } else {
      console.error('No se encontró el ID del usuario en la URL');
    }
  
}
}
