import { Component, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME } from 'ng-wizard';
import { StepGeneralesComponent } from '../step-generales/step-generales.component';
import { StepFinancierosComponent } from '../step-financieros/step-financieros.component';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 formStep1: FormGroup = new FormGroup({
    nombre: new FormControl(""),
    paterno: new FormControl(""),
    materno: new FormControl(""),
    nacimiento: new FormControl(""),
    genero: new FormControl(""),
    nacionalidad: new FormControl(""),
    club: new FormControl(""),
    ocupacion: new FormControl(""),
  });

  formStep2 = new FormGroup({
    rfc: new FormControl(""),
    calle: new FormControl(""),
    numero: new FormControl(""),
    colonia: new FormControl(""),
    cp: new FormControl("")
  });
  title = 'fmfAngular';


  ngOnInit() {



  }

  stepStates = {
    normal: STEP_STATE.normal,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden
  };
 
  config: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
     toolbarSettings: {
        showNextButton: false,
        showPreviousButton: false
    } 
  };
 

  constructor(private ngWizardService?: NgWizardService) {
  }
 
 
 
  showPreviousStep(event?: Event) {
    this.ngWizardService!.previous();
  }
 
  showNextStep(event?: Event) {
    this.ngWizardService!.next();
  }
 
  resetWizard(event?: Event) {
    this.ngWizardService!.reset();
  }
 
  setTheme(theme: THEME) {
    this.ngWizardService!.theme(theme);
  }
 
  stepChanged(args: StepChangedArgs) {
  }
 
  isValidTypeBoolean: boolean = true;
 
  isValidFunctionReturnsBoolean(args: StepValidationArgs) {
    return true;
  }
 
  isValidFunctionReturnsObservable(args: StepValidationArgs) {
    return of(true);
  }



  /**-----------------------------------------------*/

  datosGenerales = {};
  datosFinancieros = {};
dataFinal = {};
  @ViewChild(StepGeneralesComponent) stepG: StepGeneralesComponent = new StepGeneralesComponent();
  @ViewChild(StepFinancierosComponent) stepF: StepFinancierosComponent = new StepFinancierosComponent();
  
  next() {
    this.dataFinal = {};
    this.showNextStep();
    this.datosGenerales = this.stepG.recogerDatos(); // Obtener los datos necesarios del componente Y
    this.datosFinancieros = this.stepF.recogerDatoFinancieros(); // Obtener los datos necesarios del componente Y
    this.dataFinal = { ...this.datosGenerales, ...this.datosFinancieros };
  }


}
