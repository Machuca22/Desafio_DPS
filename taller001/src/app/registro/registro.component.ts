import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
   styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {
  
  registro = [];
  cliente: any;
  nombre: string;
  dui :string;
  Vehiculo : string;
  costo:number;
  mayor: string;  constructor() {
  }

  ngOnInit() {
    this.nombre = '';
    this.Vehiculo = '';
    this.dui = '';
    this.costo = 0;
  } 
  
  ingresar() {
    let contador = 0;
    let descuento:number=0;
    let nuevoCosto:number=0;

    for(let i=0; i<this.registro.length; i++){
        if(this.dui == this.registro[i].dui){
          contador++;
        }
    }

    if(contador <=0){
      this.cliente = {
        "nombre":this.nombre,
        "dui":this.dui,
        "Vehiculo":this.Vehiculo,
        "costo":this.costo,
        "Descuento":descuento,
        "Total":this.costo-descuento
      }
      this.registro.push(this.cliente);
      contador++;
    } else if (contador >=1 && contador <4) {
      descuento = 5;
      nuevoCosto = this.costo - (this.costo*0.05);
      this.cliente = {
        "nombre":this.nombre,
        "dui":this.dui,
        "Vehiculo":this.Vehiculo,
        "costo":nuevoCosto,
        "Descuento":descuento,
        "Total":nuevoCosto
    }
    this.registro.push(this.cliente);
    contador++;
  }else if (contador>=4){
    descuento = 10;
      nuevoCosto = this.costo - (this.costo*0.10);
      this.cliente = {
        "nombre":this.nombre,
        "dui":this.dui,
        "Vehiculo":this.Vehiculo,
        "costo":nuevoCosto,
        "Descuento":descuento,
        "Total":nuevoCosto
  }
  this.registro.push(this.cliente);
  contador++;
  }
}

}
