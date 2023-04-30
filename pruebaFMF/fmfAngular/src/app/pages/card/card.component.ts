import { AfterViewInit, Component, OnInit, Output, ViewChild } from '@angular/core';
import {  Input } from '@angular/core';
import { clubes } from '../../data/clubes'
import { generos } from '../../data/generos';
import { nacionalidades } from '../../data/nacionalidades';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StepGeneralesComponent } from '../step-generales/step-generales.component';
import { StepFinancierosComponent } from '../step-financieros/step-financieros.component';
import { EventEmitter } from 'events';
import { Observable } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{

  public clubs = clubes;
  public generos = generos;
  public nacionalidades = nacionalidades;
  public dataAll:any;

  @Input() object: any = {};


  constructor(private http:HttpClient, private router: Router) {

   }

  ngOnInit(): void {
  }

  mostrarModal() {
    $('#mi-modal').modal('show');
  }

  successModal() {
    $('#successModal').modal('show');
  }

sendData(){
  const clubF = this.clubs.find(u => u.id === parseInt(this.object.club));
  this.object.club = clubF;
  const generoF = this.generos.find(u => u.id === parseInt(this.object.genero));
  this.object.genero = generoF;
  const nacionalidadF = this.nacionalidades.find(u => u.id === parseInt(this.object.nacionalidad));
  this.object.nacionalidad = nacionalidadF;
  this.mostrarModal();
}



sendtoWS(){

  this.http.post('http://localhost:2590/saveData',this.object).subscribe((res)=>{
    //this.goHome();
    this.successModal();

  },(err)=>{console.log("ERR:",err)});
}

goHome() {
  this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this.router.navigate(['/home']);
  });
}
 

}
