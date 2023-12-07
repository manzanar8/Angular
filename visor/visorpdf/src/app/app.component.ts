import { Component, ElementRef, ViewChild } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'visorpdf';
  private pdfDocument: any;
  public currentPage: number = 1;
  private scale: number = 1.0;


  @ViewChild('pdfViewer', { static: true }) pdfViewer!: ElementRef; // Añade '!' para indicar que será inicializada}}



  declare  pdfjsLib: any;

  ngOnInit() {
    // Ruta del archivo PDF
    const pdfUrl = 'assets/prueba.pdf'; // Asegúrate de ajustar la ruta según tu estructura de carpetas

    // Configuración de opciones (puedes personalizar según tus necesidades)
    const options: any = {
      // Opciones de PDF.js
    };

    // Carga del archivo PDF
    this.loadPdf(pdfUrl, options);
  }

  totalPages :number = 0; 
   loadPdf(url: string, options: any) {
    pdfjsLib.getDocument(url).promise.then((pdfDocument: any) => {
      this.totalPages = pdfDocument.numPages;

      this.pdfDocument = pdfDocument;
      this.displayPage(this.currentPage, this.scale);
    }).catch((error: any) => {
      console.error('Error al cargar el documento PDF:', error);
    });
  } 


  displayPage(pageNumber: number, scale: number) {
    this.pdfDocument.getPage(pageNumber).then((page: any) => {
  
      const canvas = document.getElementById('pdfCanvas') as HTMLCanvasElement;
      const context = canvas.getContext('2d');

      const viewport: any = page.getViewport({ scale });

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      page.render({ canvasContext: context,  viewport: viewport  });

     
    });
  }

  zoomIn() {
    this.scale += 0.1;
    this.displayPage(this.currentPage, this.scale);
  }

  zoomOut() {
    this.scale -= 0.1;
    this.displayPage(this.currentPage, this.scale);
  }

  nextPage() {
    if (this.currentPage < this.pdfDocument.numPages) {
      this.currentPage++;
      this.displayPage(this.currentPage, this.scale);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.displayPage(this.currentPage, this.scale);
    }
  }

}
