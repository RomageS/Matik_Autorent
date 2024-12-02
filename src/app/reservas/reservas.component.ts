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
    this.reserva.vehiculoId = vehiculo.id;
    localStorage.setItem('vehicleId', vehiculo.id.toString()); // Asegura que se guarde el ID en localStorage
    localStorage.setItem('vehicleId', vehiculo.id.toString()); 
  
    // Debug: Imprime el ID del vehículo seleccionado
    console.log('Vehículo seleccionado:', vehiculo);
    console.log('ID del vehículo guardado en localStorage:', vehiculo.id);
    console.log('Precio por día del vehículo:', vehiculo.price_day);
  }

  // Calcular la diferencia en días entre las fechas
  calcularDiasReserva(): number {
    const fechaInicio = new Date(this.reserva.fechaEntrega);
    const fechaFin = new Date(this.reserva.fechaRegreso);
    const diferencia = Math.abs(fechaFin.getTime() - fechaInicio.getTime());
    return Math.ceil(diferencia / (1000 * 60 * 60 * 24)); // Convertimos la diferencia a días
  }

  // Redirigir al componente de pago
  // Redirigir al componente de pago
realizarReserva(): void {
  const userId = localStorage.getItem('userId');
  const vehicleId = localStorage.getItem('vehicleId');
  const vehiclePriceDay = localStorage.getItem('vehiclePriceDay'); // Recupera el precio por día

  // Debug: Mostrar valores en consola antes de validar
  console.log('Debug - Datos antes de enviar:');
  console.log('userId:', userId);
  console.log('vehicleId:', vehicleId);
  console.log('reserva.fechaEntrega:', this.reserva.fechaEntrega);
  console.log('reserva.fechaRegreso:', this.reserva.fechaRegreso);

  // Validación
  if (!userId || !vehicleId) {
    alert('Por favor, selecciona un vehículo e inicia sesión antes de confirmar la reserva.');
    return;
  }

  const vehiculoSeleccionado = this.vehiculos.find(v => v.id === parseInt(vehicleId, 10));
  if (!vehiculoSeleccionado) {
    alert('El vehículo seleccionado no es válido.');
    return;
  }

  const dias = this.calcularDiasReserva();
  const precioTotal = dias * vehiculoSeleccionado.price_day;

  const reservaData = {
    ...this.reserva,
    userId: parseInt(userId, 10),
    vehiculoId: parseInt(vehicleId, 10),
    dias,
    precioTotal,
  };

  // Debug: Mostrar los datos finales enviados al backend
  console.log('Datos enviados al backend:', reservaData);

  this.reservaService.crearReserva(reservaData).subscribe(
    (response) => {
      alert('Reserva realizada con éxito.');
      localStorage.removeItem('vehicleId'); // Limpia el `vehicleId`
      this.router.navigate(['/pago'], { state: { reserva: reservaData } }); // Navega al componente de pago con datos
    },
    (error) => {
      console.error('Error al realizar la reserva:', error);
      alert('Ocurrió un error al realizar la reserva. Intenta nuevamente.');
    }
  );
}
}
