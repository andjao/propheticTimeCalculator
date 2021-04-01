import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PropheticTimeCalculatorModule } from './prophetic-time-calculator/prophetic-time-calculator.module';
import { PropheticTimeCalculatorComponent } from './prophetic-time-calculator/prophetic-time-calculator.component';

@NgModule({
  declarations: [AppComponent, PropheticTimeCalculatorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    PropheticTimeCalculatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
