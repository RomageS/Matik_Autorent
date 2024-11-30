import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  usuariosRegistrados: number = 25; // Número ficticio
  vehiculosRegistrados: number = 12; // Número ficticio
  reservasRealizadas: number = 40; // Número ficticio

  constructor() {}

  ngOnInit(): void {
    // Aquí podrías cargar datos reales desde un servicio
  }
}
