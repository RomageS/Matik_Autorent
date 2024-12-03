import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-h-reservas',
  templateUrl: './h-reservas-english.component.html',
  styleUrl: './h-reservas-english.component.css'
})
export class HReservasEnglishComponent {
  reservas = [
    { id: 1, cliente: 'Juan Pérez', vehiculo: 'Toyota Corolla', fecha: '2024-12-01', estado: 'Activa' },
    { id: 2, cliente: 'Ana López', vehiculo: 'Honda Civic', fecha: '2024-12-05', estado: 'Completada' },
    { id: 3, cliente: 'Carlos Ruiz', vehiculo: 'Ford Fiesta', fecha: '2024-12-10', estado: 'Cancelada' }
  ];

  constructor() {}

  ngOnInit(): void {
    // Aquí puedes hacer una llamada al backend para cargar las reservas desde la base de datos.
  }

  editarReserva(reserva: any): void {
    alert(`Editar reserva de: ${reserva.cliente}`);
    // Lógica para editar reserva
  }

  eliminarReserva(id: number): void {
    const confirmacion = confirm('¿Estás seguro de eliminar esta reserva?');
    if (confirmacion) {
      this.reservas = this.reservas.filter(reserva => reserva.id !== id);
      alert('Reserva eliminada.');
    }
  }
}
