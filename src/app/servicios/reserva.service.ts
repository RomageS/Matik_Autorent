import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class ReservaService {
  private apiUrl = 'http://localhost:8080/reservas'; // URL base de tu API

  constructor(private http: HttpClient) {}

  // Crear una nueva reserva
  crearReserva(reserva: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, reserva);
  }

  // Otros métodos para reservas (obtener, cancelar, etc.)
}
