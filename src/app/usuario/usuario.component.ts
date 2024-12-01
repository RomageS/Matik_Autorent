import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit{
  usuarios = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com', telefono: '555-1234' },
    { id: 2, nombre: 'Ana López', email: 'ana@example.com', telefono: '555-5678' },
    { id: 3, nombre: 'Carlos Ruiz', email: 'carlos@example.com', telefono: '555-8765' }
  ];

  constructor() {}

  ngOnInit(): void {
    // Aquí puedes hacer una llamada al backend para cargar usuarios desde la base de datos.
    // Ejemplo:
    // this.cargarUsuarios();
  }

  editarUsuario(usuario: any): void {
    alert(`Editar usuario: ${usuario.nombre}`);
    // Lógica para editar usuario
  }

  eliminarUsuario(id: number): void {
    const confirmacion = confirm('¿Estás seguro de eliminar este usuario?');
    if (confirmacion) {
      this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
      alert('Usuario eliminado.');
    }
  }

  // Ejemplo de función para cargar usuarios desde un servicio (puedes implementarla):
  /*
  cargarUsuarios(): void {
    this.miServicio.obtenerUsuarios().subscribe((data: any) => {
      this.usuarios = data;
    });
  }
  */
}
