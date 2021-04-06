import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-prophetic-time-calculator',
  templateUrl: './prophetic-time-calculator.component.html',
  styleUrls: ['./prophetic-time-calculator.component.scss'],
})
export class PropheticTimeCalculatorComponent implements OnInit {
  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['pt', 'en', 'es']);
    translate.setDefaultLang('pt');
  }

  ngOnInit(): void { }
}
