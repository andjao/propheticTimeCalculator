import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API, Endpoint } from '../enums';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly api = this.checkEnvironment();
  private readonly propheticTimeCalculator = Endpoint.propheticTimeCalculator;

  constructor(private http: HttpClient) {}

  checkEnvironment() {
    if (environment.production) return API.apiProd;
    return API.apiLocal;
  }

  getLang(lang: string) {
    const params = new HttpParams({
      fromObject: {
        lang: lang,
      },
    });

    return this.http.get(`${this.api}${this.propheticTimeCalculator}/lang`, {
      params,
    });
  }

  getValues(type: string, timeValue: number): Observable<any> {
    const params = new HttpParams({
      fromObject: {
        type: type,
        timeValue: timeValue.toString(),
      },
    });

    return this.http.get(`${this.api}${this.propheticTimeCalculator}`, {
      params,
    });
  }
}
