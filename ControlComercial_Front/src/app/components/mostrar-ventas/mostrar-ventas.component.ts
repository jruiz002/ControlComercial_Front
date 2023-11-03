import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-mostrar-ventas',
  templateUrl: './mostrar-ventas.component.html',
  styleUrls: ['./mostrar-ventas.component.css']
})
export class MostrarVentasComponent implements OnInit{

  idSede: any = "";
  ventas: any = [];
  
  constructor(
    private activated: ActivatedRoute,
    private saleService: SalesService
  ){}

  ngOnInit(): void {
    this.activated.paramMap.subscribe( (idRuta) => {
      this.idSede = idRuta.get("idSede");
    });
    this.verVentas()
  }

  verVentas(){
    this.saleService.verVentas(this.idSede).subscribe({
      next: (res: any) => {
        this.ventas = res.sales;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }  

} 
