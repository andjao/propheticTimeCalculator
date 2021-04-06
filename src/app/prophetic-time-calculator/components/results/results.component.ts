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

  removePlural(word: string) {
    return String(word.slice(0, -1));
  }
}
