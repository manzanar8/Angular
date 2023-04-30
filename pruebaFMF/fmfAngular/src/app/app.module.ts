import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { ReactiveFormsModule } from '@angular/forms';
import { StepGeneralesComponent } from './pages/step-generales/step-generales.component';
import { StepFinancierosComponent } from './pages/step-financieros/step-financieros.component';
import { CardComponent } from './pages/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { HttpClientModule } from '@angular/common/http';




const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [
    AppComponent,
    StepGeneralesComponent,
    StepFinancierosComponent,
    CardComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgWizardModule.forRoot(ngWizardConfig),
    HttpClientModule

  ],
  exports:[
    StepGeneralesComponent,
    StepFinancierosComponent,
    CardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
 

