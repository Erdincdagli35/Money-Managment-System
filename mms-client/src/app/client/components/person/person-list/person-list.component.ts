import { Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/service/person-service';
import { Person } from 'src/app/model/person/person';
import { Income } from 'src/app/model/income/income';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  persons: Person[] = [];
  income : Income = new Income();

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons(): void {
    this.personService.getPersonAll().subscribe(data => {
      this.persons = data;
    });
  }
}
