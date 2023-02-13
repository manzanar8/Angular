import { Component , Inject } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})

export class AppComponent {

  constructor() {

 
  }

  title = 'datepicker_material';

/*   range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  }); */

  range = new FormGroup({
    start: new FormControl('', [
      Validators.required
    ]),
    end: new FormControl('', [
      Validators.required
    ]),
  });

 

}
