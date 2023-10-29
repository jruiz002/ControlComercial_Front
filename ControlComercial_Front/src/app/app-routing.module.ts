import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ProductosComponent } from './components/productos/productos.component';


const routes: Routes = [
  {path:'', component: HomeComponentComponent},
  {path:"productos", component:ProductosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
