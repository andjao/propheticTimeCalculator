import { Component, OnInit } from '@angular/core';
import { PtBr } from '../../enums/texts/pt-br.enum';
import { SharedService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.langTexts = PtBr;
  }
}
