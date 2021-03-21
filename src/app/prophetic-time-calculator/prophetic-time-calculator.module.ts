import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropheticTimeCalculatorRoutingModule } from './prophetic-time-calculator-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { ResultsComponent } from './components/results/results.component';
import { VersiclesComponent } from './components/versicles/versicles.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    InputsComponent,
    ResultsComponent,
    VersiclesComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PropheticTimeCalculatorRoutingModule,
  ], exports: [
    HeaderComponent,
    InputsComponent,
    ResultsComponent,
    VersiclesComponent,
    FooterComponent,
  ]
})
export class PropheticTimeCalculatorModule { }
