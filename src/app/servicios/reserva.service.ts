import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class ReservaService {
  private apiUrl = 'http://localhost:8080/reservations'; // URL base del controlador de reservas

  private vehiculoSeleccionado: any = null;

  constructor(private http: HttpClient) {}

  // Crear una nueva reserva
  crearReserva(reserva: any): Observable<any> {
    console.log('Llamada al backend con reserva:', reserva);
    return this.http.post<any>(this.apiUrl, reserva);
  }

  // Obtener todas las reservas
  obtenerReservas(): Observable<any[]> {
    console.log('Datos enviados al backend:'); // Depuración: Verifica los datos enviados
    return this.http.get<any[]>(`${this.apiUrl}/reservations`);
  }

  

  // Obtener una reserva por ID
  obtenerReservaPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Actualizar una reserva
  actualizarReserva(id: number, reserva: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, reserva);
  }

  // Eliminar una reserva
  eliminarReserva(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  setVehiculoSeleccionado(vehiculo: any): void {
    this.vehiculoSeleccionado = vehiculo;
  }

  getVehiculoSeleccionado(): any {
    return this.vehiculoSeleccionado;
  }

  // Obtener todas las reservas
  obtenerTodasLasReservas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  // Cancelar una reserva
  cancelarReserva(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}
