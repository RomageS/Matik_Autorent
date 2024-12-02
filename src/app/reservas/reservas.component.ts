import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private vehicleService: VehicleService,
    private router: Router // Inyectamos el Router para la navegación
  ) {}

  ngOnInit(): void {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0]; // Fecha mínima es hoy

    this.cargarVehiculos(); // Cargar lista de vehículos disponibles

    // Obtén el vehículo seleccionado desde el servicio
    this.vehiculoSeleccionado = this.reservaService.getVehiculoSeleccionado();
    if (this.vehiculoSeleccionado) {
      console.log('Vehículo seleccionado desde el servicio:', this.vehiculoSeleccionado); // Verificar datos
      this.reserva.vehiculoId = this.vehiculoSeleccionado.id; // Asocia el ID del vehículo a la reserva
    } else {
      console.warn('No se encontró ningún vehículo seleccionado.');
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
    this.reserva.vehiculoId = vehiculo.id; // Actualiza el ID del vehículo seleccionado
    localStorage.setItem('vehicleId', vehiculo.id.toString()); // Guarda el ID en localStorage
    console.log('Vehículo seleccionado:', this.vehiculoSeleccionado);
  }

  // Calcular la diferencia en días entre las fechas
  calcularDiasReserva(): number {
    const fechaInicio = new Date(this.reserva.fechaEntrega);
    const fechaFin = new Date(this.reserva.fechaRegreso);
    const diferencia = Math.abs(fechaFin.getTime() - fechaInicio.getTime());
    return Math.ceil(diferencia / (1000 * 60 * 60 * 24)); // Convertimos la diferencia a días
  }

  // Redirigir al componente de pago
  realizarReserva(): void {
    const userId = localStorage.getItem('userId');
    if (!userId || !this.reserva.vehiculoId || !this.reserva.fechaEntrega || !this.reserva.fechaRegreso) {
      alert('Por favor, completa todos los campos antes de continuar.');
      return;
    }
    console.log('Datos enviados:', this.reserva);
  this.reservaService.crearReserva(this.reserva).subscribe(/*...*/);

    const dias = this.calcularDiasReserva();
    const total = dias * this.vehiculoSeleccionado.price_day; // Calcula el total

    // Redirige al componente de pago con los datos necesarios
    this.router.navigate(['/pago'], {
      state: {
        vehiculo: this.vehiculoSeleccionado,
        dias: dias,
        total: total,
        fechas: {
          entrega: this.reserva.fechaEntrega,
          regreso: this.reserva.fechaRegreso
        }
      }
    });
  }
}
