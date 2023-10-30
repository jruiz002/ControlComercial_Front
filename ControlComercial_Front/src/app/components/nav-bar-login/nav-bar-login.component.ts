import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Owner } from 'src/app/Models/Owner';
import { NavBarLoginService } from 'src/app/services/nav-bar-login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-bar-login',
  templateUrl: './nav-bar-login.component.html',
  styleUrls: ['./nav-bar-login.component.css']
})
export class NavBarLoginComponent implements OnInit{
  dataLogin = {
    username: "",
    password: ""
  }

  // Instancia de tipo User (Owner)
  owner: Owner;

  constructor (
    private navBarRestLogin: NavBarLoginService,
    private router: Router
  ) {
    this.owner = new Owner("", "", "", "", "", []);
  }

  
  ngOnInit(): void {
  }

  login(){
    this.navBarRestLogin.login(this.dataLogin).subscribe({
      next: (res: any) => {
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.userFound));
        if (this.navBarRestLogin.getUser().role === "Dueño") {
          this.router.navigateByUrl("sedes");
        } else if (this.navBarRestLogin.getUser().role === "Trabajador"){
          this.router.navigateByUrl("productos");
        }
      },
      error: (err) => {
        Swal.fire({
          title: err.error.message || err.error,
          icon: 'error',
          showConfirmButton: false,
          timer: 2000
        });
      }
    });
  }

  // Creacion de variables para el owner
  username: string = "";
  password: string = "";
  phone: string = "";

  register(){
    this.owner.setUsername(this.username);
    this.owner.setPassword(this.password);
    this.owner.setPhone(this.phone);
    
    this.navBarRestLogin.register(this.owner).subscribe({
      next: (res: any) => {
        Swal.fire({
          title: res.message,
          icon: 'success',
          showConfirmButton: false
        });
      },
      error: (err) => {
        Swal.fire({
          title: err.error.message || err.error,
          icon: 'error',
          showConfirmButton: false,
          timer: 2000
        });
      }
    })
  }

}
