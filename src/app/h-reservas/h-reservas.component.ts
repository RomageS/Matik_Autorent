import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../servicios/reserva.service';

@Component({
  selector: 'app-h-reservas',
  templateUrl: './h-reservas.component.html',
  styleUrls: ['./h-reservas.component.css']
})
export class HReservasComponent implements OnInit {
  reservas: any[] = []; // Lista de reservas

  constructor(private reservaService: ReservaService) {}

  ngOnInit(): void {
    this.cargarReservas(); // Cargar todas las reservas al inicializar
  }

  cargarReservas(): void {
    this.reservaService.obtenerTodasLasReservas().subscribe(
      (data) => {
        console.log('Reservas cargadas:', data); // Debugging
        this.reservas = data; // Asigna las reservas al array
      },
      (error) => {
        console.error('Error al cargar reservas:', error);
      }
    );
  }

  calcularDias(fechaInicio: string, fechaFin: string): number {
    const inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);
    const diferencia = Math.abs(fin.getTime() - inicio.getTime());
    return Math.ceil(diferencia / (1000 * 60 * 60 * 24));
  }

  cancelarReserva(reservaId: number): void {
    const confirmacion = confirm('¿Estás seguro de cancelar esta reserva?');
    if (confirmacion) {
      this.reservaService.cancelarReserva(reservaId).subscribe(
        () => {
          alert('Reserva cancelada con éxito.');
          this.cargarReservas(); // Recarga la lista de reservas
        },
        (error) => {
          console.error('Error al cancelar la reserva:', error);
        }
      );
    }
  }
}
