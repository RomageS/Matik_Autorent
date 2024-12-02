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
reservas: any;

  calcularDias(fechaInicio: string, fechaFin: string): number {
    const inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);
    const diferencia = Math.abs(fin.getTime() - inicio.getTime());
    return Math.ceil(diferencia / (1000 * 60 * 60 * 24));
  }
  
  calcularTotal(fechaInicio: string, fechaFin: string, precioPorDia: number): number {
    const dias = this.calcularDias(fechaInicio, fechaFin);
    return dias * precioPorDia;
  }

  

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
