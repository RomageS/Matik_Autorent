import { Component } from '@angular/core';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-flota-english',
  templateUrl: './flota-english.component.html',
  styleUrl: './flota-english.component.css'
})
export class FlotaEnglishComponent {
  constructor(private service: ApiService) {
  
  }
 ngOnInit():void {
 this.service.obtenerDatos().subscribe((data) => {
 this.cars = data;
 
 
 //Para hacer prueba
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
