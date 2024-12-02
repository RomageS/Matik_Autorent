import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  usuariosRegistrados: number = 25; // Número ficticio
  vehiculosRegistrados: number = 12; // Número ficticio
  reservasRealizadas: number = 40; // Número ficticio

  constructor() {}

  ngOnInit(): void {
    // Aquí podrías cargar datos reales desde un servicio
  }
}
