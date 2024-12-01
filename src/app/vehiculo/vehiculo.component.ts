import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {
  vehiculos = [
    { id: 1, modelo: 'Toyota Corolla', placa: 'ABC-123', estado: 'Disponible' },
    { id: 2, modelo: 'Honda Civic', placa: 'XYZ-456', estado: 'En renta' },
    { id: 3, modelo: 'Ford Fiesta', placa: 'LMN-789', estado: 'Mantenimiento' }
  ];

  constructor() {}

  ngOnInit(): void {
    // Aquí puedes hacer una llamada al backend para cargar los vehículos desde la base de datos.
  }

  editarVehiculo(vehiculo: any): void {
    alert(`Editar vehículo: ${vehiculo.modelo}`);
    // Lógica para editar vehículo
  }

  eliminarVehiculo(id: number): void {
    const confirmacion = confirm('¿Estás seguro de eliminar este vehículo?');
    if (confirmacion) {
      this.vehiculos = this.vehiculos.filter(vehiculo => vehiculo.id !== id);
      alert('Vehículo eliminado.');
    }
  }
}
