import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class ApiService {
  private apiUrl = 'http://localhost:8080'; // Cambia esta URL por tu API

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const payload = { email, password };
    return this.http.post<any>('http://localhost:8080/users/login', payload); //Cambiar para obtener usuarios
  }
  // Ejemplo: obtener datos
  obtenerDatos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/vehicles`);
  }

  // Ejemplo: enviar datos
  enviarDatos(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/vehicles`, payload);
  }
}