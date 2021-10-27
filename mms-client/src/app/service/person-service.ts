import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../model/person';

@Injectable({ providedIn: 'root' })
export class PersonService {

  readonly baseURL = "http://localhost:8080/persons";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.baseURL);
  }

  create(person: Person): Observable<Object> {
    return this.httpClient.post<Person>(this.baseURL, person);
  }

  getById(id: number): Observable<Person> {
    return this.httpClient.get<Person>(this.baseURL+`/${id}`);
  }

  edit(person: Person): Observable<Object> {
    return this.httpClient.put<Person>(`${this.baseURL}`, person);
  }

  delete(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
