import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/model/person/person';
import { PersonService } from 'src/app/service/person-service';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.scss']
})
export class PersonDeleteComponent implements OnInit {

  id: number = 0;
  person: Person = new Person();
  persons: Person[] = [];

  readonly baseURL = "http://localhost:8080/persons";

  constructor(private route: ActivatedRoute, private personService: PersonService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personService.deletePerson(this.id).subscribe(data => {
    })
    this.goToList();
  }

  goToList() {
    this.router.navigate(['']);
  }
}
