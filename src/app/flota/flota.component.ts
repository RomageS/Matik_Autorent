import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-flota',
  templateUrl: './flota.component.html',
  styleUrl: './flota.component.css'
})
export class FlotaComponent {
 constructor(private service: ApiService) {
  
 }
ngOnInit():void {
this.service.obtenerDatos().subscribe((data) => {
this.cars = data;

//alert(this.cars[1].brand);
});

}

  cars = [
    {
      color: '',
      brand:'',
      model: 'Chevrolet Beat 5P',
      category: 'Economy Car',
      passengers: 5,
      luggage: '2 Maletas',
      transmission: 'Estándar',
      doors: 5,
      ac: true,
      image: 'https://via.placeholder.com/300x200'
    }
  ];
}
