import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/users'; // URL base de la API

  constructor(private http: HttpClient) {}

  // Obtener todos los usuarios
  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtener usuario por ID
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Registrar un nuevo usuario
  registerUser(name: string, lastName: string, email: string, password: string): Observable<any> {
    const payload = { name, lastName, email, password };
    return this.http.post<any>(this.apiUrl, payload);
  }

  // Actualizar un usuario existente
  updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, user);
  }

  // Eliminar un usuario por ID
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Iniciar sesión
  login(email: string, password: string): Observable<any> {
    const payload = { email, password };
    return this.http.post<any>(`${this.apiUrl}/login`, payload);
  }

  getUserReservations(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/users/${userId}/reservations`);
  }
}
