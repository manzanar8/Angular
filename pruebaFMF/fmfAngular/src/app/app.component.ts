import { Component, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME } from 'ng-wizard';
import { StepGeneralesComponent } from './pages/step-generales/step-generales.component';
//import * as stream from 'stream';
import { StepFinancierosComponent } from './pages/step-financieros/step-financieros.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fmfAngular';


}
