import { Component , Inject } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  cp = new FormControl('');

  public minDate;
  public maxDate;
  constructor() {

    let dd = String(new Date().getDate()).padStart(2,'0');
    let mm = String(new Date().getMonth()).padStart(2,'0');
    let yyyy = new Date().getFullYear();
// En minDate se setea el año actual,mes actual y del día actual -(5 dias)
    this.minDate = new Date(yyyy,parseInt(mm)-1,parseInt(dd)-5);
    this.maxDate = new Date(yyyy,parseInt(mm)-1,parseInt(dd));
 
  }

  title = 'datepicker_material';

  range = new FormGroup({
    start: new FormControl('', [
      Validators.required
    ]),
    end: new FormControl('', [
      Validators.required
    ]),
  });


/* public tmp:any = '';

  test(e:any){
    let cps = (this.cp.value)?this.cp.value:'';
    let size = cps.length;
   
    if (size === 5){
      if (this.tmp === cps){
        console.log("LANZA NOOOO")
      } else {
        this.tmp = this.cp.value;
        console.log("LANZA WS")
      }
    } else {
      console.log("nada")
    }
    
  } */
}
