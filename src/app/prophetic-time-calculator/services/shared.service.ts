import { Injectable } from '@angular/core';
import { LangTexts, ResultValues } from '../models';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}
  langTexts: LangTexts;
  resultValues: ResultValues;
}
