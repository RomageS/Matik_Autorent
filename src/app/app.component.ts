import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
email: any;
password: any;
onSubmit() {
throw new Error('Method not implemented.');
}
  title = 'Matik_Autorent';
}

export class LoginPopoverComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Lógica adicional para autenticar al usuario
  }
}