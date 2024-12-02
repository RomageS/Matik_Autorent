import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  reserva: any = null;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { reserva: any };

    if (state && state.reserva) {
      this.reserva = state.reserva;
    } else {
      console.warn('No se encontraron datos en la navegación.');
    }
  }

  ngOnInit(): void {}




  confirmarPago(): void {
    alert('Pago confirmado. ¡Gracias por tu reserva!');
    this.router.navigate(['/']); // Redirige a la página principal o donde prefieras
  }
  
}
