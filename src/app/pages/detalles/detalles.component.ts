import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  //Base de datos
  info:any=[];

  //Para seleccionar el numero de detalle
  detalles!:any;

  constructor(private rutaActiva:ActivatedRoute, private data:DataService) { }

  ngOnInit(): void {
    this.data.getAll().subscribe( data => this.info = data) //base de datos
    this.detalles = this.rutaActiva.snapshot.params; //para obtener los parametros de detalles
    console.log(this.detalles);
  }

}
