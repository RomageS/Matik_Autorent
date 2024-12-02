import { Component } from '@angular/core';
import { VehicleService } from '../servicios/vehicle.service';

@Component({
  selector: 'app-flota-english',
  templateUrl: './flota-english.component.html',
  styleUrl: './flota-english.component.css'
})
export class FlotaEnglishComponent {
  constructor(private service: VehicleService) {
  
  }
  ngOnInit():void {
    this.service.getAllVehiculos().subscribe((data) => {
    this.cars = data;
 
 

 
 
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
