import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person/person';
import { PersonService } from 'src/app/service/person-service';


@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.scss']
})
export class PersonCreateComponent implements OnInit {

  person: Person = new Person();

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit(): void {
  }

  savePerson(): void {
    this.personService.createPerson(this.person).subscribe(data => {
      console.log(data);
      this.goToPersonList();
    },
      error => console.log(error));
  }

  goToPersonList(): void {
    this.router.navigate(["/persons"]);
  }

  onSubmit() {
    console.log(this.person);
    this.savePerson();
  }
}
