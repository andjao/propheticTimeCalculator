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

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
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
export class PropheticTimeCalculatorModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}