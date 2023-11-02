import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NavBarLoginService } from './nav-bar-login.service';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  httpOptions = new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": this.navBarLoginService.getToken()
  });

  constructor(
    private navBarLoginService: NavBarLoginService,
    private http: HttpClient
  ) { }

  verProductos(idCampus: string){
    return this.http.get(environment.baseUrl + "product/verProductos/" + idCampus, {headers: this.httpOptions})
  }

  agregarProducto(params: {}, idCampus: string){
    return this.http.post(environment.baseUrl + "product/agregarProducto/" + idCampus, params, {headers: this.httpOptions})
  }

  editarProducto(params:{}, idProducto: string, idCampus: string){
    return this.http.put(environment.baseUrl + "product/editarProducto/" + idProducto + "/" + idCampus , params, {headers: this.httpOptions})
  }

  verProducto(idProducto:string){
    return this.http.get(environment.baseUrl + "product/verProducto/" + idProducto, {headers: this.httpOptions})
  }

  eliminarProducto(idProducto: string){
    return this.http.delete(environment.baseUrl + "product/eliminarProducto/" + idProducto, {headers: this.httpOptions})
  }

}
