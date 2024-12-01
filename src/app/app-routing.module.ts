import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlotaComponent } from './flota/flota.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { ReservasComponent } from './reservas/reservas.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { SesionComponent } from './sesion/sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { TerminosComponent } from './terminos/terminos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'flota', component: FlotaComponent},
  {path: 'ayuda', component: AyudaComponent},
  {path: 'usuario', component:UsuarioComponent},
  {path: 'reservas', component: ReservasComponent},
  {path: 'ubicacion', component: UbicacionComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'privacidad', component: PrivacidadComponent},
  {path: 'registro/privacidad', component: PrivacidadComponent},
  {path: 'terminos', component:TerminosComponent},
  {path: 'registro/terminos', component:TerminosComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'perfil', component:PerfilComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
