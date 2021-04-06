import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-versicles',
  templateUrl: './versicles.component.html',
  styleUrls: ['./versicles.component.scss'],
})
export class VersiclesComponent implements OnInit {
  versicle: number = 0;

  constructor() { }

  ngOnInit(): void { }

  changeVersicle(versicle: number) {
    this.versicle = versicle;
  }
}
