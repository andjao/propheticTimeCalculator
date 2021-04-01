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
import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [
    HeaderComponent,
    InputsComponent,
    ResultsComponent,
    VersiclesComponent,
    FooterComponent,
  ],
  imports: [CommonModule, PropheticTimeCalculatorRoutingModule],
  exports: [
    HeaderComponent,
    InputsComponent,
    ResultsComponent,
    VersiclesComponent,
    FooterComponent,
  ],
  providers: [SharedService],
})
export class PropheticTimeCalculatorModule {}
