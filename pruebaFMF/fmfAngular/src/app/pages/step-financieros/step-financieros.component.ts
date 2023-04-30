import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-financieros',
  templateUrl: './step-financieros.component.html',
  styleUrls: ['./step-financieros.component.css']
})
export class StepFinancierosComponent implements OnInit {



  public data:any;
  
  formStep2 = new FormGroup({
    rfc: new FormControl("",  Validators.pattern(/^[A-Z]{4}[0-9]{6}[A-Z0-9]{3}$/)),
    calle: new FormControl(""),
    numero: new FormControl(""),
    colonia: new FormControl(""),
    cp: new FormControl("", [Validators.maxLength(5), Validators.pattern(/^[0-9]{5}$/)])
  });
 
  constructor() { }

  ngOnInit(): void {
  }
  @Input() objectG: any = {};


  recogerDatoFinancieros() {
    this.data = {
      rfc: this.formStep2.get('rfc')?.value,
      calle: this.formStep2.get('calle')?.value,
      numero: this.formStep2.get('numero')?.value,
      colonia: this.formStep2.get('colonia')?.value,
      cp: this.formStep2.get('cp')?.value
    };
    const datos = this.data; // Obtener los datos necesarios
   // this.datosRecogidos.emit(datos);
    return datos;
  }

  resetCamposFinancieros(){
    this.formStep2 = new FormGroup({
      rfc: new FormControl(""),
      calle: new FormControl(""),
      numero: new FormControl(""),
      colonia: new FormControl(""),
      cp: new FormControl("")
    });
  }
}
