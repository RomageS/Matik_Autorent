import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../servicios/reserva.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css'],
})
export class ReservasComponent implements OnInit {
  reserva = {
    fechaEntrega: '',
    fechaRegreso: '',
    codigoDescuento: '',
  };

  minDate: string = ''; // Fecha mínima para el campo de entrega

  constructor(private reservaService: ReservaService) {} // Inyecta el servicio

  ngOnInit() {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0]; // Configura la fecha mínima como hoy
  }

  realizarReserva(): void {
    // Validación adicional (opcional)
    if (!this.reserva.fechaEntrega || !this.reserva.fechaRegreso) {
      alert('Por favor, completa todas las fechas requeridas.');
      return;
    }

    // Enviar los datos al servicio
    this.reservaService.crearReserva(this.reserva).subscribe(
      (response) => {
        alert('Reserva realizada con éxito');
        this.reserva = { fechaEntrega: '', fechaRegreso: '', codigoDescuento: '' }; // Limpia el formulario
      },
      (error) => {
        console.error('Error al realizar la reserva:', error);
        alert('Ocurrió un error al realizar la reserva. Intenta nuevamente.');
      }
    );
  }
}
