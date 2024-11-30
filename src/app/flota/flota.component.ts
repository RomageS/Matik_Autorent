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


//Para hacer prueba
//alert(this.cars[1].brand);


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
