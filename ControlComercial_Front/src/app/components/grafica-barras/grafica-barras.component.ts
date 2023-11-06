import { Component, OnInit } from '@angular/core';
import { NavBarLoginService } from 'src/app/services/nav-bar-login.service';
import { SedeService } from 'src/app/services/sede.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-grafica-barras',
  templateUrl: './grafica-barras.component.html',
  styleUrls: ['./grafica-barras.component.css']
})
export class GraficaBarrasComponent implements OnInit {

  constructor(
    private sedesRest: SedeService,
    private navBarLoginRest: NavBarLoginService
  ){}

  ngOnInit(): void { 
    this.getSedesGrafic()
  }

  chartOptions1 = {
    responsive: true,
    scales: {
        yAxes: [{
                display: true,
                ticks: {
                    beginAtZero: true
                }
            }]
    }
  };
  chartLabels1: any = [];
  chartLegend1 = true;
  chartPlugins1 = [];

  chartData1: any = [{
     data: [], 
     label: 'SEDES' 
    }];

    chartColors: any = [
      {
        backgroundColor: [],
      },
  ];

  arraySedes: any = [];

  getSedesGrafic(){
    this.sedesRest.verSedes(this.navBarLoginRest.getUser()._id).subscribe({
      next: (res: any) => {
        this.arraySedes = res.sedes;
        
        this.arraySedes.forEach((sede: any) => {
          console.log(sede.totalDailySales)
            this.chartLabels1.push(sede.name);
            this.chartData1[0].data.push(sede.totalDailySales);
            this.chartColors[0].backgroundColor.push(
              `#${Math.floor(Math.random() * 16777215).toString(16)}`
            );
        });
      },
      error: (err) => {
        Swal.fire({
          title: err.error.message || err.error,
          icon: 'error',
          showConfirmButton: false,
          timer: 3000
        });
      }
    });
  }

}
