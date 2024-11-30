import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class ApiService {
  updateAddress(address: string) {
    throw new Error('Method not implemented.');
  }
  getUserProfile() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:8080'; // Cambia esta URL por tu API

  constructor(private http: HttpClient) {}

  registerUser(name: string, lastName: string, email: string, password: string): Observable<any> {
    const payload = { name, lastName, email, password };
    return this.http.post<any>(`${this.apiUrl}/users`, payload); // Cambia esta ruta a la correcta
  }

  login(email: string, password: string): Observable<any> {
    const payload = { email, password };
    return this.http.post<any>('http://localhost:8080/users/login', payload).pipe(
      tap(response => {
        // Suponiendo que el backend devuelve un token de autenticación
        localStorage.setItem('isLoggedIn', 'true'); // Estado de sesión
      localStorage.setItem('userRole', response.role); // Guardar el token en localStorage
   //Cambiar para obtener usuarios
  })
)}

changePassword(data: { email: string; currentPassword: string; newPassword: string }): Observable<any> {
  return this.http.put<any>('http://localhost:8080/users/change-password', data); // Cambia la URL según tu backend
}


  // Ejemplo: obtener datos
  obtenerDatos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/vehicles`);
  }

  // Ejemplo: enviar datos
  enviarDatos(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/vehicles`, payload);
  }

  getFeaturedVehicles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/vehicles/featured`);
  }

  registrarReserva(reserva: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/dates`, reserva);
  }

}