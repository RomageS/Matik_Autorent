import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../servicios/api.service';  // Ajusta la ruta de tu servicio
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registroForm: FormGroup;
  mensajeError: string | null = null;
  mensajeSuccess: string | null = null;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {

    // Definir el formulario reactivo
    this.registroForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required, this.passwordMatchValidator]]
    });
  }

  // Validador para comparar las contraseñas
  passwordMatchValidator(control: any): { [key: string]: boolean } | null {
    const password = control.root?.get('password')?.value;
    if (password && control.value !== password) {
      return { 'passwordMismatch': true };
    }
    return null;
  }

  // Método para enviar el formulario
  onSubmit(): void {
    if (this.registroForm.invalid) {
      this.mensajeError = 'Por favor, complete el formulario correctamente.';
      return;
    }

    const { name, lastName, email, password } = this.registroForm.value;
     this.apiService.registerUser(name, lastName, email, password).subscribe(
      (response) => {
        console.log('Usuario registrado:', response);
        this.mensajeSuccess = '¡Registro exitoso! Ya puedes iniciar sesión.';
        setTimeout(() => {
          this.router.navigate(['/home']);  // Redirigir al home
          alert('¡Ya puedes iniciar sesión!');
        }, 2000);
      },

      (error) => {
        this.mensajeError = 'Hubo un error al registrar el usuario. Intenta nuevamente.';
        console.error('Error al registrar usuario:', error);
      }
    );
  }
}
