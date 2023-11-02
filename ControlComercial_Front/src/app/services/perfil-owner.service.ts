import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NavBarLoginService } from './nav-bar-login.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilOwnerService {

  htppOptions = new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": this.navBarLoginService.getToken()
  });

  constructor(
    private navBarLoginService: NavBarLoginService,
    private http: HttpClient
  ) { }

  verProveedores(idOwner: string){
    return this.http.get(environment.baseUrl + "owner/verProveedores/" + idOwner, {headers: this.htppOptions});
  }

  buscarOwner(idOwner: string){
    return this.http.get(environment.baseUrl + "owner/buscarOwner/" + idOwner, {headers: this.htppOptions})
  }

  editProfile(params: {}, idOwner: string){
    return this.http.put(environment.baseUrl + "owner/editProfile/" + idOwner, params, {headers: this.htppOptions})
  }
  


}
