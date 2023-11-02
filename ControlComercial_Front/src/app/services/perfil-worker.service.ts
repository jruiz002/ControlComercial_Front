import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavBarLoginService } from './nav-bar-login.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilWorkerService {
  httpOptions = new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": this.navBarLoginService.getToken()
  });

  constructor(
    private navBarLoginService: NavBarLoginService,
    private http: HttpClient
  ) { }

  
}
