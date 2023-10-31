import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavBarLoginService } from 'src/app/services/nav-bar-login.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{



  constructor(
    private activated: ActivatedRoute,
    private navBarRest: NavBarLoginService

  ){}

  ngOnInit(): void {
    if(this.navBarRest.getUser().role === "Dueño"){
      
    }
    else if(this.navBarRest.getUser().role === "Trabajador"){
    }

  }


}
