import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarLoginService } from 'src/app/services/nav-bar-login.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  constructor(
    private router: Router,
    private navBarLoginRest: NavBarLoginService,

  ){}
  
  ngOnInit(): void {

  }

  rederigirInicio(){
    if(this.navBarLoginRest.getUser().role === "Dueño"){
      this.router.navigateByUrl("/sedes")
    }
  }

  redirigirPerfil(){
    if(this.navBarLoginRest.getUser().role === "Dueño"){
      this.router.navigateByUrl("/perfilOwner")
    }
    else if(this.navBarLoginRest.getUser().role === "Trabajador"){
      this.router.navigateByUrl("/perfilWorker")
    }
  }

  cerrarSesion(){
    this.router.navigateByUrl("");
    localStorage.clear();
  }

}
