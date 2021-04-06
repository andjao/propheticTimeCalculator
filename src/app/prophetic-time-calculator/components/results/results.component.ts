import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  constructor(public sharedService: SharedService) { }

  ngOnInit(): void { }

  concatF(a: string, b: string): string {
    console.log(a.replace("s", "") + b);
    return a.replace("s", "") + b;
  }
}
