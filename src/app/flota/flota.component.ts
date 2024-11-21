import { Component } from '@angular/core';

@Component({
  selector: 'app-flota',
  templateUrl: './flota.component.html',
  styleUrl: './flota.component.css'
})
export class FlotaComponent {
  cars = [
    {
      model: 'Chevrolet Beat 5P',
      category: 'Economy Car',
      passengers: 5,
      luggage: '2 Maletas',
      transmission: 'Estándar',
      doors: 5,
      ac: true,
      image: 'https://via.placeholder.com/300x200'
    },
    {
      model: 'Chevrolet Beat 4P',
      category: 'Compact Car',
      passengers: 5,
      luggage: '2 Maletas',
      transmission: 'Estándar',
      doors: 4,
      ac: true,
      image: 'https://via.placeholder.com/300x200'
    },
    {
      model: 'Chevrolet Aveo LT',
      category: 'Intermediate Car',
      passengers: 5,
      luggage: '3 Maletas',
      transmission: 'Automático',
      doors: 4,
      ac: true,
      image: 'https://via.placeholder.com/300x200'
    }
  ];
}
