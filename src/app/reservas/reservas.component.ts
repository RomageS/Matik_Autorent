import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';

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

  minDate: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0]; // Configura la fecha mínima como hoy
  }

  realizarReserva() {
    console.log(this.reserva); // Verifica los datos antes de enviarlos
    this.apiService.registrarReserva(this.reserva).subscribe(
      (response) => {
        alert('Reserva realizada con éxito');
        console.log(response);
      },
      (error) => {
        alert('Error al realizar la reserva');
        console.error(error);
      }
    );
  }
}
