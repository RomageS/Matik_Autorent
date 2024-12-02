import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FlotaComponent } from './flota/flota.component';
import { ReservasComponent } from './reservas/reservas.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { FormsModule } from '@angular/forms';
import { SesionComponent } from './sesion/sesion.component';
import { HeaderComponent } from './header/header.component';
import { RegistroComponent } from './registro/registro.component';
import { TerminosComponent } from './terminos/terminos.component';

import { AyudaEnglishComponent } from './ayuda-english/ayuda-english.component';
import { DashboardEnglishComponent } from './dashboard-english/dashboard-english.component';
import { FlotaEnglishComponent } from './flota-english/flota-english.component';
import { HeaderEnglishComponent } from './header-english/header-english.component';
import { HomeEnglishComponent } from './homeenglish/home-english.component';
import { PrivacidadEnglishComponent } from './privacidadenglish/privacidad-english.component';
import { RegistroEnglishComponent } from './registroenglish/registro-english.component';
import { ServiciosEnglishComponent } from './serviciosenglish/servicios-english.component';
import { ReservarEnglishComponent } from './reservasenglish/reservar-english.component';
import { SesionEnglishComponent } from './sesionenglish/sesion-english.component';
import { TerminosEnglishComponent } from './terminosenglish/terminos-english.component'; 
import { UbicacionEnglishComponent } from './ubicacionenglish/ubicacion-english.component'; 

import { PrivacidadComponent } from './privacidad/privacidad.component';
import { VehicleService } from './servicios/vehicle.service';
import { ReservaService } from './servicios/reserva.service';
import { UserService } from './servicios/user.service';

import { PerfilComponent } from './perfil/perfil.component';

import { UsuarioComponent } from './usuario/usuario.component';
import { FooterComponent } from './footer/footer.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { HReservasComponent } from './h-reservas/h-reservas.component';

import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlotaComponent,
    ReservasComponent,
    AyudaComponent,
    UbicacionComponent,
    SesionComponent,
    HeaderComponent,
    RegistroComponent,
    TerminosComponent,

    DashboardEnglishComponent,
    FlotaEnglishComponent,
    HomeEnglishComponent,
    PrivacidadEnglishComponent,
    RegistroEnglishComponent,
    ReservarEnglishComponent,
    SesionEnglishComponent,
    HeaderEnglishComponent,

    PrivacidadComponent,
    ReservasComponent,
    PerfilComponent,


    UsuarioComponent,
    FooterComponent,
    VehiculoComponent,
    HReservasComponent,
    DashboardComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgbModalModule,
    ReactiveFormsModule
  ],

  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

