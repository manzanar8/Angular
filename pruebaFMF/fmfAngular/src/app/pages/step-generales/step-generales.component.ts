import { Component, Input,EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { clubes } from '../../data/clubes'
import { generos } from '../../data/generos';
import { nacionalidades } from '../../data/nacionalidades';

@Component({
  selector: 'app-step-generales',
  templateUrl: './step-generales.component.html',
  styleUrls: ['./step-generales.component.css']
})

export class StepGeneralesComponent {
 

  public clubs = clubes;
  public generos = generos;
  public nacionalidades = nacionalidades;
  public esMayor = false;

  public data: any;

    formStep1 = new FormGroup({
    nombre: new FormControl(""),
    paterno: new FormControl(""),
    materno: new FormControl(""),
    nacimiento: new FormControl(""),
    genero: new FormControl(""),
    nacionalidad: new FormControl(""),
    club: new FormControl(""),
    ocupacion: new FormControl(""),
  }); 

  constructor() { }



  @Input() valor: any;





  validaEdad(dateBitrh: string) {
    const fechaNacimiento = new Date(dateBitrh);
    const fechaActual = new Date();
    const milisegundosTranscurridos = fechaActual.getTime() - fechaNacimiento.getTime();
    const edad = Math.floor(milisegundosTranscurridos / (365 * 24 * 60 * 60 * 1000));
    if (edad >= 18) {
      console.log('La persona es mayor de 18 años:', edad);
      this.esMayor = true;
    } else {
      console.log('La persona es menor de 18 años', edad);
      this.esMayor = false;

    }


  }
  
  recogerDatos() {
    this.data = {
      nombre: this.formStep1.get('nombre')?.value,
      paterno: this.formStep1.get('paterno')?.value,
      materno: this.formStep1.get('materno')?.value,
      nacimiento: this.formStep1.get('nacimiento')?.value,
      genero: this.formStep1.get('genero')?.value,
      nacionalidad: this.formStep1.get('nacionalidad')?.value,
      club: this.formStep1.get('club')?.value,
      ocupacion: this.formStep1.get('ocupacion')?.value,
      esMayor: this.esMayor
    };
    const datos = this.data; // Obtener los datos necesarios
   // this.datosRecogidos.emit(datos);
    return datos;
  }




}
