import { Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../service/person-service';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  persons: Person[] = [];

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons(): void {
    this.personService.getAll().subscribe(data => {
      this.persons = data;
    });
  }
}
