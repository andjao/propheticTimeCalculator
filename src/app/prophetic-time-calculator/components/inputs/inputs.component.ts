import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService, SharedService } from '../../services';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
})
export class InputsComponent implements OnInit {
  @ViewChild('timeValue') timeValue: ElementRef;
  timeConvert: number;

  constructor(
    public sharedService: SharedService,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void { }

  calculate(type: string): void {
    this.apiService
      .getValues(type, this.timeValue.nativeElement.value)
      .subscribe((res) => {
        this.sharedService.resultValues = res;
      });
  }
}
