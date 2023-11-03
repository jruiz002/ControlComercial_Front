import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NavBarLoginService } from './nav-bar-login.service';

@Injectable({
  providedIn: 'root'
})
export class SedeService {

  htppOptions = new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": this.navBarLoginService.getToken()
  });

  constructor(
    private navBarLoginService: NavBarLoginService,
    private http: HttpClient
  ) { }

  verSedes(idOwner: string){
    return this.http.get(environment.baseUrl + "Campus/verSedes/" + idOwner, {headers: this.htppOptions})
  }

  agregarSede(params: {}, idOwner: string){
    return this.http.post(environment.baseUrl + "Campus/agregarSede/" + idOwner, params, {headers: this.htppOptions})
  }

  editarSede(idSede: string, params: {}, idOwner: string){
    return this.http.put(environment.baseUrl + "Campus/editarSede/" + idSede + "/" + idOwner, params, {headers: this.htppOptions})
  }

  verSede(nameSede: string){
    return this.http.get(environment.baseUrl + "Campus/verSede/" + nameSede, {headers: this.htppOptions})
  }
  
  eliminarSede(idSede: string){
    return this.http.delete(environment.baseUrl + "Campus/eliminarSede/" + idSede, {headers: this.htppOptions})
  }

}
