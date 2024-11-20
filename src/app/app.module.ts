import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { PrivacidadComponent } from './privacidad/privacidad.component';

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
    PrivacidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

