import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropheticTimeCalculatorRoutingModule } from './prophetic-time-calculator-routing.module';
import {
  HeaderComponent,
  InputsComponent,
  ResultsComponent,
  VersiclesComponent,
  FooterComponent,
} from './components';
import { SharedService, ApiService } from './services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    InputsComponent,
    ResultsComponent,
    VersiclesComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    PropheticTimeCalculatorRoutingModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
    InputsComponent,
    ResultsComponent,
    VersiclesComponent,
    FooterComponent,
  ],
  providers: [SharedService, ApiService],
})
export class PropheticTimeCalculatorModule {}
