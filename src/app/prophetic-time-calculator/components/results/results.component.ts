import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(
    public sharedService: SharedService
  ) { }

  ngOnInit(): void {
  }

  verifyPlural(type: string, value?: number) {
    if (value !== undefined) {
      if (type === "input") {
        if (value < 2) return this.sharedService.langTexts[this.sharedService.dateType]
          .replace('s', '');
        return this.sharedService.langTexts[this.sharedService.dateType];
      } else if (type === "literalEquals") {
        if (value < 2) return this.sharedService.langTexts.literalEquals;
        return this.sharedService.langTexts.literalsEquals;
      } else {
        if (value < 2) return this.sharedService.langTexts[type.substring(0, type.length - 1)];
        return this.sharedService.langTexts[type];
      }
    }
  }

}
