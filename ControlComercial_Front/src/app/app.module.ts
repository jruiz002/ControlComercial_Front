import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarLoginComponent } from './components/nav-bar-login/nav-bar-login.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PerfilOwnerComponent } from './components/perfil-owner/perfil-owner.component';
import { PerfilWorkerComponent } from './components/perfil-worker/perfil-worker.component';
import { SedesComponent } from './components/sedes/sedes.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MostrarVentasComponent } from './components/mostrar-ventas/mostrar-ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarLoginComponent,
    HomeComponentComponent,
    NavBarComponent,
    ProductosComponent,
    PerfilOwnerComponent,
    PerfilWorkerComponent,
    SedesComponent,
    EstadisticasComponent,
    MostrarVentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
