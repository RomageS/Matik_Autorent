import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaService } from '../servicios/reserva.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router, private reservaService: ReservaService) {}

  reservarAhora(vehiculo: any): void {
    console.log('Vehículo seleccionado:', vehiculo); // Verifica qué datos se están pasando
    this.reservaService.setVehiculoSeleccionado(vehiculo); // Guarda el vehículo seleccionado
    this.router.navigate(['/reservas']); // Redirige a la página de reservas
  }
}
