import { Injectable } from '@angular/core';
import { ResultValues } from '../models';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}
  resultValues: ResultValues;
}
