import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PerfilOwnerComponent } from './components/perfil-owner/perfil-owner.component';
import { PerfilWorkerComponent } from './components/perfil-worker/perfil-worker.component';
import { SedesComponent } from './components/sedes/sedes.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';


const routes: Routes = [
  {path:'', component: HomeComponentComponent},
  {path:"productos/:idSede", component:ProductosComponent},
  {path:"perfilOwner", component:PerfilOwnerComponent},
  {path:"perfilWorker", component:PerfilWorkerComponent},
  {path:"sedes", component:SedesComponent},
  {path:"estadisticas", component:EstadisticasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
