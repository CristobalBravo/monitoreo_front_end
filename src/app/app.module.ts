import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { BreadcrumbsComponent } from './layout/admin/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './layout/admin/title/title.component';
import { AuthComponent } from './layout/auth/auth.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { NgxPaginationModule } from 'ngx-pagination';


import { FormsModule } from '@angular/forms';
import { DonutsComponent } from './components/donuts/donuts.component';
import { GraficUSerByDateComponent } from './components/grafic-user-by-date/grafic-user-by-date.component';

import {HttpClientModule} from '@angular/common/http';
import { TopUsersComponent } from './components/estadisticas/top-users/top-users.component'
import { StatisticByBrowserComponent } from './components/estadisticas/statistic-by-browser/statistic-by-browser.component';
import { TopPagesComponent } from './components/estadisticas/pages/top-pages/top-pages.component'
import { TopsTypeModuloComponent } from './components/estadisticas/modulo/tipo/tops-type-modulo/tops-type-modulo.component';
import { StatisticsBySoComponent } from './components/estadisticas/statistic-by-browser/statistics-by-so/statistics-by-so.component';
import { StatisticsByBrowserVersionComponent } from './components/estadisticas/statistic-by-browser/statistics-by-browser-version/statistics-by-browser-version.component';
import { VersionStatisticsByBrowserComponent } from './components/estadisticas/statistic-by-browser/version-statistics-by-browser/version-statistics-by-browser.component';
import { BrowserComponent } from './components/estadisticas/browser/browser.component';
import { SystemComponent } from './components/estadisticas/system/system.component';
import { UriMemoryComponent } from './components/estadisticas/system/uri-memory/uri-memory.component';
import { ControllerMemoryComponent } from './components/estadisticas/system/controller-memory/controller-memory.component';
import { MethodMemoryComponent } from './components/estadisticas/system/method-memory/method-memory.component';
import { ExecutiontimeComponent } from './components/estadisticas/executiontime/executiontime.component';
import { ExecutionTimeControllerComponent } from './components/estadisticas/executiontime/execution-time-controller/execution-time-controller.component';
import { ExecutionTimeUriComponent } from './components/estadisticas/executiontime/execution-time-uri/execution-time-uri.component';
import { ExecutionTimeMethodComponent } from './components/estadisticas/executiontime/execution-time-method/execution-time-method.component';
import { ConfiguracionesComponent } from './components/configuraciones/configuraciones.component';
import { ConfiguracionSugerenciasComponent } from './components/configuraciones/configuracion-sugerencias/configuracion-sugerencias.component';
import { RouterModule } from '@angular/router';
import { UsuarioConfiguracionesComponent } from './components/configuraciones/usuario-configuraciones/usuario-configuraciones.component';
import { Ng9RutModule } from 'ng9-rut';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioConfiguracionesCrearComponent } from './components/configuraciones/usuario-configuraciones/usuario-configuraciones-crear/usuario-configuraciones-crear.component';
import { MemoriaMaximaComponent } from './components/sugerencias/memoria-maxima/memoria-maxima.component';
import { MemoriaUsadaComponent } from './components/sugerencias/memoria-usada/memoria-usada.component';
import { TiempoEjecucionComponent } from './components/sugerencias/tiempo-ejecucion/tiempo-ejecucion.component';
import { AlertasComponent } from './components/alertas/alertas.component';
import { ByPlatformComponent } from './components/alertas/by-platform/by-platform.component';
import { ByCodeAlertsComponent } from './components/alertas/by-code-alerts/by-code-alerts.component';
import { ClipboardModule } from '@angular/cdk/clipboard';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BreadcrumbsComponent,
    TitleComponent,
    AuthComponent,
    EstadisticasComponent,
    DonutsComponent,
    GraficUSerByDateComponent,
    TopUsersComponent,
    StatisticByBrowserComponent,
    TopPagesComponent,
    TopsTypeModuloComponent,
    StatisticsBySoComponent,
    StatisticsByBrowserVersionComponent,
    VersionStatisticsByBrowserComponent,
    BrowserComponent,
    SystemComponent,
    UriMemoryComponent,
    ControllerMemoryComponent,
    MethodMemoryComponent,
    ExecutiontimeComponent,
    ExecutionTimeControllerComponent,
    ExecutionTimeUriComponent,
    ExecutionTimeMethodComponent,
    ConfiguracionesComponent,
    ConfiguracionSugerenciasComponent,
    UsuarioConfiguracionesComponent,
    UsuarioConfiguracionesCrearComponent,
    LoginComponent,
    MemoriaMaximaComponent,
    MemoriaUsadaComponent,
    TiempoEjecucionComponent,
    AlertasComponent,
    ByPlatformComponent,
    ByCodeAlertsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    GoogleChartsModule,
    HttpClientModule,
    RouterModule,
    Ng9RutModule,
    NgbModule,
    CommonModule,
    NgxPaginationModule,
    ClipboardModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
