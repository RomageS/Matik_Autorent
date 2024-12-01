import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../servicios/vehicle.service'; // Importa el servicio de vehículos

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {
  vehiculos: any[] = []; // Lista de vehículos
  vehiculoSeleccionado: any = {}; // Vehículo actualmente en edición o nuevo

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.cargarVehiculos(); // Carga los vehículos al inicializar el componente
  }

  // Método para cargar vehículos desde la API
  cargarVehiculos(): void {
    this.vehicleService.getAllVehiculos().subscribe(
      (data) => {
        this.vehiculos = data; // Asigna los datos obtenidos al array de vehículos
      },
      (error) => {
        console.error('Error al cargar vehículos:', error); // Manejo de errores
      }
    );
  }

  // Método para guardar un vehículo (nuevo o actualizado)
  guardarVehiculo(): void {
    if (this.vehiculoSeleccionado.id) {
      // Si el vehículo tiene un ID, lo actualizamos
      this.vehicleService.updateVehiculo(this.vehiculoSeleccionado.id, this.vehiculoSeleccionado).subscribe(
        () => {
          alert('Vehículo actualizado con éxito.');
          this.cargarVehiculos(); // Recarga la lista de vehículos
          this.vehiculoSeleccionado = {}; // Limpia el formulario
        },
        (error) => {
          console.error('Error al actualizar el vehículo:', error);
        }
      );
    } else {
      // Si no tiene un ID, creamos un nuevo vehículo
      this.vehicleService.registerVehiculo(this.vehiculoSeleccionado).subscribe(
        () => {
          alert('Vehículo registrado con éxito.');
          this.cargarVehiculos(); // Recarga la lista de vehículos
          this.vehiculoSeleccionado = {}; // Limpia el formulario
        },
        (error) => {
          console.error('Error al registrar el vehículo:', error);
        }
      );
    }
  }

  // Método para seleccionar un vehículo para edición
  editarVehiculo(vehiculo: any): void {
    this.vehiculoSeleccionado = { ...vehiculo }; // Carga los datos del vehículo en el formulario
  }

  // Método para eliminar un vehículo
  eliminarVehiculo(id: number): void {
    const confirmacion = confirm('¿Estás seguro de eliminar este vehículo?');
    if (confirmacion) {
      this.vehicleService.deleteVehiculo(id).subscribe(
        () => {
          alert('Vehículo eliminado con éxito.');
          this.cargarVehiculos(); // Recarga la lista de vehículos
        },
        (error) => {
          console.error('Error al eliminar el vehículo:', error);
        }
      );
    }
  }
}
