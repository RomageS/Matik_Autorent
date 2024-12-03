import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEnglishComponent } from '../homeenglish/home-english.component';
import { AyudaEnglishComponent } from '../ayuda-english/ayuda-english.component';
import { DashboardEnglishComponent } from '../dashboard-english/dashboard-english.component';
import { FlotaEnglishComponent } from '../flota-english/flota-english.component';
import { HeaderEnglishComponent } from '../header-english/header-english.component';
import { PrivacidadEnglishComponent } from '../privacidadenglish/privacidad-english.component';
import { RegistroEnglishComponent } from '../registroenglish/registro-english.component';
import { ReservarEnglishComponent } from '../reservasenglish/reservar-english.component';
import { ServiciosEnglishComponent } from '../serviciosenglish/servicios-english.component';
import { SesionEnglishComponent } from '../sesionenglish/sesion-english.component';
import { TerminosEnglishComponent } from '../terminosenglish/terminos-english.component';
import { UbicacionEnglishComponent } from '../ubicacionenglish/ubicacion-english.component';

const routes: Routes = [
    {path: "home-english", component:HomeEnglishComponent},
    {path: "ayuda-english", component:AyudaEnglishComponent},
    {path: "dashboard-english", component:DashboardEnglishComponent},
    {path: "flota-english", component:FlotaEnglishComponent},
    {path: "header-english", component:HeaderEnglishComponent},
    {path: "privacidad-english", component:PrivacidadEnglishComponent},
    {path: "registro-english", component:RegistroEnglishComponent},
    {path: "reservas-english", component:ReservarEnglishComponent},
    {path: "servicios-english", component:ServiciosEnglishComponent},
    {path: "sesion-english", component:SesionEnglishComponent},
    {path: "terminos-english", component:TerminosEnglishComponent},
    {path: "ubicacion-englishi*", component:UbicacionEnglishComponent},
    // Se usa directamente porque es standalone
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnglishRoutingModule {}
