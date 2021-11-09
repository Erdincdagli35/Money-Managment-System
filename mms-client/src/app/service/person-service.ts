import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../model/person/person';

@Injectable({ providedIn: 'root' })
export class PersonService {

  readonly baseURL = "http://localhost:8080/persons";

  constructor(private httpClient: HttpClient) { }

  getPersonAll(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.baseURL);
  }

  createPerson(person: Person): Observable<Object> {
    return this.httpClient.post<Person>(this.baseURL, person);
  }

  getPersonById(id: number): Observable<Person> {
    return this.httpClient.get<Person>(this.baseURL+`/${id}`);
  }

  editPerson(person: Person): Observable<Object> {
    return this.httpClient.put<Person>(`${this.baseURL}`, person);
  }

  deletePerson(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
