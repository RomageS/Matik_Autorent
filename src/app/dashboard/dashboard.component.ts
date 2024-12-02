import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicios/user.service';
import { VehicleService } from '../servicios/vehicle.service';
import { ReservaService } from '../servicios/reserva.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  usuariosRegistrados: number = 0;
  vehiculosRegistrados: number = 0;
  reservasRealizadas: number = 0;

  constructor(
    private userService: UserService,
    private vehicleService: VehicleService,
    private reservaService: ReservaService
  ) {}

  ngOnInit(): void {
    // Contar usuarios registrados
    this.userService.getAllUsers().subscribe({
      next: (usuarios) => {
        this.usuariosRegistrados = usuarios.length;
      },
      error: (err) => {
        console.error('Error al cargar usuarios:', err);
      }
    });

    // Contar vehículos registrados
    this.vehicleService.getAllVehiculos().subscribe({
      next: (vehiculos) => {
        this.vehiculosRegistrados = vehiculos.length;
      },
      error: (err) => {
        console.error('Error al cargar vehículos:', err);
      }
    });

    // Contar reservas realizadas
    this.reservaService.obtenerReservas().subscribe({
      next: (reservas: any[]) => {
        this.reservasRealizadas = reservas.length;
      },
      error: (err) => {
        console.error('Error al cargar reservas:', err);
      }
    });
  }
}
