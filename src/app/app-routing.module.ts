import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlotaComponent } from './flota/flota.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { ReservasComponent } from './reservas/reservas.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { SesionComponent } from './sesion/sesion.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'flota', component: FlotaComponent},
  {path: 'ayuda', component: AyudaComponent},
  {path: 'reservas', component: ReservasComponent},
  {path: 'ubicacion', component: UbicacionComponent},
  {path: 'promociones', component: PromocionesComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
