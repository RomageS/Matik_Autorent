import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../servicios/reserva.service';
import { VehicleService } from '../servicios/vehicle.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  reserva = {
    fechaEntrega: '',
    fechaRegreso: '',
    vehiculoId: null // Almacena el ID del vehículo seleccionado
  };

  vehiculos: any[] = []; // Lista de vehículos disponibles
  vehiculoSeleccionado: any = null; // Vehículo seleccionado
  minDate: string = ''; // Fecha mínima para el formulario

  constructor(
    private reservaService: ReservaService,
    private vehicleService: VehicleService
  ) {}

  ngOnInit(): void {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0]; // Fecha mínima es hoy

    this.cargarVehiculos(); // Cargar lista de vehículos disponibles

    // Obtén el vehículo seleccionado desde el servicio
    const vehiculo = this.reservaService.getVehiculoSeleccionado();
    if (vehiculo) {
      this.vehiculoSeleccionado = vehiculo;
      this.reserva.vehiculoId = vehiculo.id; // Asocia el ID del vehículo a la reserva
    }

  }

  // Cargar los vehículos disponibles
  cargarVehiculos(): void {
    this.vehicleService.getAllVehiculos().subscribe(
      (data) => {
        this.vehiculos = data.filter((vehiculo: any) => vehiculo.status === 'Disponible');
      },
      (error) => {
        console.error('Error al cargar los vehículos:', error);
      }
    );
  }

  // Seleccionar un vehículo
seleccionarVehiculo(vehiculo: any): void {
  this.vehiculoSeleccionado = vehiculo;
  this.reserva.vehiculoId = vehiculo.id; // Asocia el ID del vehículo con la reserva
}



  // Realizar la reserva
  realizarReserva(): void {
    if (!this.reserva.vehiculoId) {
      alert('Por favor, selecciona un vehículo antes de confirmar la reserva.');
      return;
    }

    this.reservaService.crearReserva(this.reserva).subscribe(
      (response) => {
        alert('Reserva realizada con éxito.');
        this.reserva = { fechaEntrega: '', fechaRegreso: '', vehiculoId: null };
        this.vehiculoSeleccionado = null; // Limpia la selección del vehículo
        this.cargarVehiculos(); // Recarga los vehículos disponibles
      },
      (error) => {
        console.error('Error al realizar la reserva:', error);
        alert('Ocurrió un error al realizar la reserva. Intenta nuevamente.');
      }
    );
  }
}
