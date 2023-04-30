import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { jsPDF } from "jspdf";

interface Data {
  nombre: string;
  nacimiento: string;
  genero: string;
  nacionalidad: string;
  club: string;
  rfc: string;
  [index: string]: any;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public object: any = null;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  public searchForm = new FormGroup({
    option: new FormControl(1),
    valueF: new FormControl("")
  });


exist:any;
  search() {
    let option = this.searchForm.get('option')?.value;
    let value = this.searchForm.get('valueF')?.value;

    this.http.get(`http://localhost:2590/getData/${option}/${value}`).subscribe((res) => {
   
      
      if (!res.hasOwnProperty("error") && res!=null) {
        this.object = res;
        this.exist = true;
      } else {
        this.object = null;
        this.exist = false;
      }
    }, (err) => { console.log("ERR:", err) });

  }


  download() {
    const doc = new jsPDF();
    let posx = 20;
    let posy = 20;
    doc.text("Datos Generales", 85, 15);

    let data: Data = this.formatInfo(this.object);
    Object.keys(data).forEach((key, value) => {
      posy += 10;
      doc.text(`${data[key]}`, posx, posy);
    });

    doc.save(`${this.object.nombre}_${this.object.id}.pdf`);
  }


  formatInfo(data: any) {
    let dataDwn = {
      nombre: `Nombre: ${this.titleCase(data.nombre)} ${this.titleCase(data.paterno)} ${this.titleCase(data.materno)}`,
      nacimiento: `Fecha de Nacimiento: ${data.nacimiento} `,
      genero: `Género: ${this.titleCase(data.genero?.nombre)} `,
      nacionalidad: `Nacionalidad: ${this.titleCase(data.nacionalidad?.nombre)} `,
      club: `Club de Fútbol: ${this.titleCase(data.club?.nombre)} `,
      rfc: `R.F.C.: ${(data.rfc).toUpperCase()} `,
    };
    return dataDwn;

  }

  titleCase(str: string) {
    let st = '';
    if (str) {
      st = str.charAt(0).toUpperCase() + str.substring(1);
    }
    return st;
  }


  reset(){
    this.searchForm.get("valueF")?.reset();
  }
}
