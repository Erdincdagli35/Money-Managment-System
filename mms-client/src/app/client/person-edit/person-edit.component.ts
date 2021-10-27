import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/service/person-service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {

  id: number = 0;
  person: Person = new Person();

  constructor(private personService: PersonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personService.getById(this.id).subscribe(data => {
      this.person = data;
    },
      error => console.log(error));
  }

  onSubmit() {
    this.personService.edit(this.person).subscribe(data => {
      this.goToList();
    },
      error => console.log(error));
  }

  goToList() {
    this.router.navigate(['']);
  }
}
