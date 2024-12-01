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

  minDate: string = '';

  constructor() {}

  ngOnInit() {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0]; // Configura la fecha mínima como hoy
  }

}
