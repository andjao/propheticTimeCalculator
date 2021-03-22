import { Injectable } from '@angular/core';
import { ResultValues, Texts } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor() { }
  langTexts: Texts;
  inputValue: number;
  resultValues: ResultValues;
}
