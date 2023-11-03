import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavBarLoginService } from 'src/app/services/nav-bar-login.service';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';
import {Product} from "src/app/Models/Product"
import { SalesService } from 'src/app/services/sales.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  //Arreglo Productos
  arrayProductos: any = [];

  //Instancia de Producto
  producto: Product

  //Id de la sede del que se desee ver productos (Inventario)
  idCampusDueño: any;

  // Role
  role: string = "";


  constructor(
    private productoRest: ProductosService,
    private activated: ActivatedRoute,
    private navBarRest: NavBarLoginService,
    private salesRest: SalesService,
    private router: Router
  ){
    this.producto = new Product ("", "", 0, 0, "", "");
  }

  ngOnInit(): void {
    if(this.navBarRest.getUser().role === "Dueño"){
      this.activated.paramMap.subscribe( (idRuta) => {
        this.idCampusDueño = idRuta.get("idSede");
        this.verProductos()
      });
    }
    else if(this.navBarRest.getUser().role === "Trabajador"){
      this.activated.paramMap.subscribe( (idRuta) => {
        this.idCampusDueño = idRuta.get("idSede");
        this.verProductos()
      });
    }
    this.role = this.navBarRest.getUser().role;
  }

  //Método para ver productos
  verProductos(){
    this.productoRest.verProductos(this.idCampusDueño).subscribe({
      next:(res: any)=>{
        this.arrayProductos = res.productos;
      },
      error: (error)=>{
        console.log(error);
      }
    })
  }

  //Variables para crear producto
  name: string = "";
  price: number = 0;
  amount: number = 0;
  nombreProveedor: string = "";
  idCampus: string = "";

 
  agregarProducto(){
    this.producto.setName(this.name);
    this.producto.setPrice(this.price);
    this.producto.setAmount(this.amount);
    this.producto.setNombreProveedor(this.nombreProveedor);
    /*this.producto.setIdCampus(this.idCampus);*/
    this.productoRest.agregarProducto(this.producto, this.idCampusDueño ).subscribe({
      next: (res: any) => {
        Swal.fire({
          title: res.message,
          icon: 'success',
          showConfirmButton: false
        });
        this.verProductos();
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

  updateProducto ={
    _id: "",
    name: "",
    price: 0,
    amount: 0,
    nombreProveedor :"",
    idCampus: ""
  }

  verProducto(idProducto: string){
    this.productoRest.verProducto(idProducto).subscribe({
      next: (res: any) => {
        this.updateProducto._id = res.producto._id;
        this.updateProducto.name = res.producto.name;
        this.updateProducto.price = res.producto.price;
        this.updateProducto.amount = res.producto.amount;
        this.updateProducto.nombreProveedor = res.producto.nombreProveedor;
        this.updateProducto.idCampus = res.producto.idCampus;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  editarProducto(){
    this.productoRest.editarProducto(this.updateProducto, this.updateProducto._id, this.idCampusDueño).subscribe({
      next: (res: any) => {
        Swal.fire({
          title: res.message,
          icon: 'success',
          timer: 2000
        });
        this.verProductos()
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

  eliminarProducto(){
    this.productoRest.eliminarProducto(this.updateProducto._id).subscribe({
      next: (res: any) => {
        Swal.fire({
          title: res.message,
          icon: 'success',
          timer: 2000
        });
        this.verProductos()
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  paramsVenta = {
    amount: 0,
    idProduct: "",
  }

  agregarIdProduct(idProduct: string){
    this.paramsVenta.idProduct = idProduct
  }

  agregarVentas(){
    this.salesRest.agregarVentas(this.paramsVenta, this.idCampusDueño).subscribe({
      next: (res: any) => {
        Swal.fire({
          title: res.message,
          icon: 'success',
          timer: 2000
        });
        this.verProductos();
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

  redirigirVentas(){
    this.router.navigateByUrl("/ventas/" + this.idCampusDueño)
  }
}

