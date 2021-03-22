import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../../services';


@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  @ViewChild("timeValue") timeValue: ElementRef;
  timeConvert: number;

  constructor(
    public sharedService: SharedService
  ) { }

  ngOnInit(): void {
  }

  calculate(type: string): void {
    let timeValue: number = this.timeValue.nativeElement.value;
    this.sharedService.inputValue = timeValue;
    this.sharedService.dateType = type;
    switch (type) {
      case 'seconds':
        this.timeConvert = timeValue / 24 / 60 / 60;
        break;
      case 'minutes':
        this.timeConvert = timeValue / 24 / 60;
        break;
      case 'hours':
        this.timeConvert = timeValue / 24;
        break;
      case 'days':
        this.timeConvert = Number(timeValue);
        break;
      case 'weeks':
        this.timeConvert = timeValue * 7;
        break;
      case 'months':
        this.timeConvert = timeValue * 30;
        break;
      case 'years':
        this.timeConvert = timeValue * 365;
    }
    this.sharedService.resultValues = {
      years: Math.floor(this.timeConvert),
      months: Math.floor(this.timeConvert * 12),
      weeks: Math.floor(this.timeConvert * 52),
      days: Math.floor(this.timeConvert * 365),
      hours: Math.floor(this.timeConvert * 365 * 24),
      minutes: Math.floor(this.timeConvert * 365 * 24 * 60),
      seconds: Math.floor(this.timeConvert * 365 * 24 * 60 * 60),
    }
  }

}
