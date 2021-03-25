import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { BrowserComponent } from './components/estadisticas/browser/browser.component';
import { SystemComponent } from './components/estadisticas/system/system.component';
import { ExecutiontimeComponent } from './components/estadisticas/executiontime/executiontime.component';
import { ConfiguracionSugerenciasComponent } from './components/configuraciones/configuracion-sugerencias/configuracion-sugerencias.component';
import { UsuarioConfiguracionesComponent } from './components/configuraciones/usuario-configuraciones/usuario-configuraciones.component';
import { UsuarioConfiguracionesCrearComponent } from './components/configuraciones/usuario-configuraciones/usuario-configuraciones-crear/usuario-configuraciones-crear.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { MemoriaMaximaComponent } from './components/sugerencias/memoria-maxima/memoria-maxima.component';
import { TiempoEjecucionComponent } from './components/sugerencias/tiempo-ejecucion/tiempo-ejecucion.component';
import { MemoriaUsadaComponent } from './components/sugerencias/memoria-usada/memoria-usada.component';
import { AlertasComponent } from './components/alertas/alertas.component';
import { IsAdminGuard } from './guards/is-admin.guard';

const routes: Routes = [

  {
    path: '', component: AdminComponent, canActivate: [AuthGuardGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: EstadisticasComponent },
    ]
  },
  {
    path: 'estadisticas',
    component: AdminComponent,
    canActivate: [AuthGuardGuard],

    children: [
      { path: 'browser', component: BrowserComponent },
      { path: 'memory', component: SystemComponent },
      { path: 'executionTime', component: ExecutiontimeComponent },


    ]
  },
  {
    path: 'sugerencias', component: AdminComponent, canActivate: [AuthGuardGuard],
    children: [

      { path: 'memoriaMaxima', component: MemoriaMaximaComponent },
      { path: 'memoriaUsada', component: MemoriaUsadaComponent },
      { path: 'tiempoEjecucion', component: TiempoEjecucionComponent },
    ]
  },

  {
    path: 'configuraciones', component: AdminComponent, canActivate: [AuthGuardGuard,IsAdminGuard],

    children: [

      //configuracion
      { path: 'sugerencias', component: ConfiguracionSugerenciasComponent },
      { path: 'usuario', component: UsuarioConfiguracionesComponent },
      { path: 'usuario/crear', component: UsuarioConfiguracionesCrearComponent },
      { path: 'usuario/:id', component: UsuarioConfiguracionesCrearComponent },

    ]
  },

  {
    path: 'alertas', component: AdminComponent, canActivate: [AuthGuardGuard],

    children: [
      { path: 'errores', component: AlertasComponent }

    ]
  },
  { path: 'logout/:sure', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
