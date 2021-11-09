import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Income } from '../model/income/income';

@Injectable({ providedIn: 'root' })
export class IncomeService {

  readonly baseURL = "http://localhost:8080/incomes";

  constructor(private httpClient: HttpClient) { }

  createIncome(income: Income, personId?: number): Observable<Object> {
    return this.httpClient.post<Income>(this.baseURL + `/${personId}`, income);
  }

  getIncomeAllByPersonId(personId?: number): Observable<Income[]>{
    return this.httpClient.get<Income[]>(this.baseURL+ `/${personId}`)
  }
}
