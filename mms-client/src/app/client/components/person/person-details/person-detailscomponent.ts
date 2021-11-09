import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/model/person/person';
import { PersonService } from 'src/app/service/person-service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {

  id: number = 0;
  person!: Person ;

  constructor(private route: ActivatedRoute, private personService: PersonService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.getPersonById(this.id);
  }


  getPersonById(personId: number): void {
    this.personService.getPersonById(personId).subscribe(response => {
      this.person = response;
    } );
  }
}
