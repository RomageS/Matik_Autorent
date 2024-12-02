import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicios/user.service'; // Importa el servicio de usuarios

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: any[] = []; // Lista de usuarios filtrados
  usuarioSeleccionado: any = {}; // Usuario actualmente en edición o nuevo

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.cargarUsuarios(); // Carga los usuarios al inicializar el componente
  }

  // Método para cargar usuarios desde la API
  cargarUsuarios(): void {
    this.userService.getAllUsers().subscribe(
      (data) => {
        // Filtra los usuarios para excluir aquellos con rol ADMIN
        this.usuarios = data.filter((usuario: any) => usuario.role !== 'ADMIN');
      },
      (error) => {
        console.error('Error al cargar usuarios:', error); // Manejo de errores
      }
    );
  }

  // Método para guardar un usuario (nuevo o actualizado)
  guardarUsuario(): void {
    if (this.usuarioSeleccionado.id) {
      // Si el usuario tiene un ID, lo actualizamos
      this.userService.updateUser(this.usuarioSeleccionado.id, this.usuarioSeleccionado).subscribe(
        () => {
          alert('Usuario actualizado con éxito.');
          this.cargarUsuarios(); // Recarga la lista de usuarios
          this.usuarioSeleccionado = {}; // Limpia el formulario
        },
        (error) => {
          console.error('Error al actualizar el usuario:', error);
        }
      );
    } else {
      // Si no tiene un ID, creamos un nuevo usuario
      this.userService.registerUser(
        this.usuarioSeleccionado.nombre,
        '',
        this.usuarioSeleccionado.email,
        ''
      ).subscribe(
        () => {
          alert('Usuario registrado con éxito.');
          this.cargarUsuarios(); // Recarga la lista de usuarios
          this.usuarioSeleccionado = {}; // Limpia el formulario
        },
        (error) => {
          console.error('Error al registrar el usuario:', error);
        }
      );
    }
  }

  // Método para seleccionar un usuario para edición
  editarUsuario(usuario: any): void {
    this.usuarioSeleccionado = { ...usuario }; // Carga los datos del usuario en el formulario
  }

  // Método para eliminar un usuario
  eliminarUsuario(id: number): void {
    const confirmacion = confirm('¿Estás seguro de eliminar este usuario?');
    if (confirmacion) {
      this.userService.deleteUser(id).subscribe(
        () => {
          alert('Usuario eliminado con éxito.');
          this.cargarUsuarios(); // Recarga la lista de usuarios
        },
        (error) => {
          console.error('Error al eliminar el usuario:', error);
        }
      );
    }
  }
}
