import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl = 'http://localhost:8080/vehicles'; // URL base de tu API

  constructor(private http: HttpClient) {}

  // Obtener todos los vehículos
  getAllVehiculos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Registrar un nuevo vehículo
  registerVehiculo(vehiculo: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, vehiculo);
  }

  // Actualizar un vehículo existente
  updateVehiculo(id: number, vehiculo: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, vehiculo);
  }

  // Eliminar un vehículo por ID
  deleteVehiculo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
