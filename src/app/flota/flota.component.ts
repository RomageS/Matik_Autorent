import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../servicios/vehicle.service';

@Component({
  selector: 'app-flota',
  templateUrl: './flota.component.html',
  styleUrl: './flota.component.css'
})
export class FlotaComponent {
 constructor(private service: VehicleService) {
  
 }
ngOnInit():void {
this.service.getAllVehiculos().subscribe((data) => {
this.cars = data;





});

}

  cars = [
    {
      brand:'',
      model: 'Chevrolet Beat 5P',
      year: '',
      color: '',
      transmission: '',
      price_day: 0 ,
      mileage: '',
      status: '',
      ac: 'si',
      image: 'https://via.placeholder.com/300x200'
    }
  ];
}
