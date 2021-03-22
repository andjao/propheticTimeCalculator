import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services';


@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  timeValue: number;
  timeConvert: number;

  constructor(
    public sharedService: SharedService
  ) { }

  ngOnInit(): void {
  }

  calculate(type: string): void {
    switch (type) {
      case 'second':
        this.timeConvert = this.timeValue / 24 / 60 / 60;
        break;
      case 'minute':
        this.timeConvert = this.timeValue / 24 / 60;
        break;
      case 'hour':
        this.timeConvert = this.timeValue / 24;
        break;
      case 'day':
        this.timeConvert = this.timeValue;
        break;
      case 'week':
        this.timeConvert = this.timeValue * 7;
        break;
      case 'month':
        this.timeConvert = this.timeValue * 30;
        break;
      case 'year':
        this.timeConvert = this.timeValue * 365;
    }
    this.sharedService.resultValues.months = (this.timeConvert * 12);
    this.sharedService.resultValues.weeks = (this.timeConvert * 52);
    this.sharedService.resultValues.days = (this.timeConvert * 365);
    this.sharedService.resultValues.hours = (this.sharedService.resultValues.days * 24);
    this.sharedService.resultValues.minutes = (this.sharedService.resultValues.hours * 60);
    this.sharedService.resultValues.seconds = (this.sharedService.resultValues.minutes * 60);
  }

}
