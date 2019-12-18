import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AccesoColaboradorComponent } from './components/acceso-colaborador/acceso-colaborador.component';
import { AccesoAdminComponent } from './components/acceso-admin/acceso-admin.component';
import { AgregarColaboradorComponent } from './components/agregar-colaborador/agregar-colaborador.component';
import { AsignarProyectoComponent } from './components/asignar-proyecto/asignar-proyecto.component';
import { VerProyectosComponent } from './components/ver-proyectos/ver-proyectos.component';
import { ReporteStaffingComponent } from './components/reporte-staffing/reporte-staffing.component';

const appRoutes: Routes = [
{ path : 'home', component: LoginComponent},
{ path : 'AccesoCol', component: AccesoColaboradorComponent},
{ path : 'AccesoAdmin', component: AccesoAdminComponent},
{ path : 'AgregarCol', component: AgregarColaboradorComponent},
{ path : 'AsignarProyectos', component: AsignarProyectoComponent},
{ path : 'VerProyectos', component: VerProyectosComponent},
{ path : 'ReporteStaffing', component: ReporteStaffingComponent},
];
  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccesoColaboradorComponent,
    AccesoAdminComponent,
    AgregarColaboradorComponent,
    AsignarProyectoComponent,
    VerProyectosComponent,
    ReporteStaffingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
