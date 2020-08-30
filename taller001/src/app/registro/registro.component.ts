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
  alumno: any;
  nombre: string;
  dui :string;
  Vehiculo : string;
  costo:number;
  mayor: string;
  contador: number; constructor() {
  }
  ngOnInit() {
    this.nombre = '';
    this.Vehiculo = '';
    this.dui = '';
    this.costo = 0;
    this.contador = 0;
  } ingresar() {
     this.alumno = {
      "nombre": this.nombre,
      "dui": this.dui,
      "Vehiculo": this.Vehiculo,
      "costo": this.costo,
      "mayor": this.mayor
    };
    this.registro.push(this.alumno);
    this.contador++;
  }
}
