import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../servicios/vehicle.service';
import { ReservaService } from '../servicios/reserva.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flota',
  templateUrl: './flota.component.html',
  styleUrls: ['./flota.component.css']
})
export class FlotaComponent implements OnInit {
  cars: any[] = []; // Lista de vehículos cargados desde el servicio

  constructor(
    private service: VehicleService,
    private reservaService: ReservaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Cargar los vehículos desde el servicio
    this.service.getAllVehiculos().subscribe((data) => {
      this.cars = data;
    });
  }

  // Método para manejar la acción de reservar
  reservarAhora(car: any): void {
    this.reservaService.setVehiculoSeleccionado(car); // Guarda el vehículo seleccionado en el servicio
    this.router.navigate(['/reservas']); // Redirige a la página de reservas
  }
}