import { Injectable } from '@angular/core';
import { ResultValues } from '../models';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}
  langTexts: any;
  inputValue: number;
  dateType: string;
  resultValues: ResultValues;
}
