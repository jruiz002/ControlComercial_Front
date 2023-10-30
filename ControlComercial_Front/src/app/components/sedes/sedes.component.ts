import { Component, OnInit } from '@angular/core';
import { Campus } from 'src/app/Models/Campus';
import { NavBarLoginService } from 'src/app/services/nav-bar-login.service';
import { SedeService } from 'src/app/services/sede.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.css']
})
export class SedesComponent implements OnInit{
  // Arreglo de sedes
  arraySedes: any = [];

  // Se crea la instancia de sedes
  sede: Campus;
  
  constructor(
    private sedesRest: SedeService,
    private navBarLoginRest: NavBarLoginService
  ){
    this.sede = new Campus("", "", "", 0);
  }

  ngOnInit(): void {
    this.verSedes();
  }

  
  // Metodo para ver sedes
  verSedes(){
    this.sedesRest.verSedes(this.navBarLoginRest.getUser()._id).subscribe({
      next: (res: any) => {
        this.arraySedes = res.sedes;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  
  // Variables para crear una sede
  name: string = "";

  // Método para agregar sede
  agregarSede(){
    this.sede.setName(this.name);
    this.sedesRest.agregarSede(this.sede, this.navBarLoginRest.getUser()._id).subscribe({
      next: (res: any) => {
        Swal.fire({
          title: res.message,
          icon: 'success',
          showConfirmButton: false
        });
        this.verSedes();
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

  updateSede = {
    _id: "",
    name: "",
    idOwner: "",
    totalDailySales: 0
  }

  verSede(nameSede: string){
    this.sedesRest.verSede(nameSede).subscribe({
      next: (res: any) => {
        this.updateSede.name = res.sede.name;
        this.updateSede._id = res.sede._id;
        this.updateSede.idOwner = res.sede.idOwner;
        this.updateSede.totalDailySales = res.sede.totalDailySales;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  editarSede(){
    this.sedesRest.editarSede(this.updateSede._id, this.updateSede).subscribe({
      next: (res: any) => {
        Swal.fire({
          title: res.message,
          icon: 'success',
          timer: 2000
        });
        this.verSedes()
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
