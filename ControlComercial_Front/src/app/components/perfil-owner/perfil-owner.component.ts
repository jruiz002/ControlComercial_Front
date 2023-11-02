import { Component, OnInit } from '@angular/core';
import { NavBarLoginService } from 'src/app/services/nav-bar-login.service';
import { PerfilOwnerService } from 'src/app/services/perfil-owner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil-owner',
  templateUrl: './perfil-owner.component.html',
  styleUrls: ['./perfil-owner.component.css']
})
export class PerfilOwnerComponent implements OnInit{

  constructor(
    private navBarRest: NavBarLoginService,
    private perfilOwnerService: PerfilOwnerService
  ){}

  ngOnInit(): void {
    this.buscarOwner()
    this.verProveedores()
  }
  user = {
    username: "",
    phone: "",
    role: "",
    suppliers: []
  }

  verProveedores(){
    this.perfilOwnerService.verProveedores(this.navBarRest.getUser()._id).subscribe({
      next: (res: any) => {
        this.user.suppliers = res.suppliers;
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  buscarOwner(){
    this.perfilOwnerService.buscarOwner(this.navBarRest.getUser()._id).subscribe({
      next: (res: any) => {
        this.user.username = res.owner.username
        this.user.phone = res.owner.phone
        this.user.role = res.owner.role
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  editProfile(){
    this.perfilOwnerService.editProfile(this.user, this.navBarRest.getUser()._id).subscribe({
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