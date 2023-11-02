import { Component, OnInit } from '@angular/core';
import { NavBarLoginService } from 'src/app/services/nav-bar-login.service';

@Component({
  selector: 'app-perfil-worker',
  templateUrl: './perfil-worker.component.html',
  styleUrls: ['./perfil-worker.component.css']
})
export class PerfilWorkerComponent implements OnInit {
  constructor(
    private navBarRest: NavBarLoginService
    
    ){}
  ngOnInit(): void {
    this.agregarInformacion()
  }

  user = {
    username: "",
    phone: "",
    salary: 0,
    role: ""
  }

  agregarInformacion(){
    this.user.username = this.navBarRest.getUser().username
    this.user.phone = this.navBarRest.getUser().phone
    this.user.salary = this.navBarRest.getUser().salary
    this.user.role = this.navBarRest.getUser().role
  }
}
