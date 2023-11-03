import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NavBarLoginService } from './nav-bar-login.service';


@Injectable({
  providedIn: 'root'
})
export class SalesService {

  httpOptions = new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": this.navBarLoginService.getToken()
  });

  constructor(
    private navBarLoginService: NavBarLoginService,
    private http: HttpClient
  ) { }

  agregarVentas(params: {}, idCampus: string){
    return this.http.post(environment.baseUrl + "sale/agregarVentas/"+ idCampus, params, {headers: this.httpOptions})
  }

  verVentas(idSede: string){
    return this.http.get(environment.baseUrl + "sale/verVentas/" + idSede, {headers: this.httpOptions})
  }

}
