import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Income } from 'src/app/model/income/income';
import { Person } from 'src/app/model/person/person';
import { IncomeService } from 'src/app/service/income-service';
import { PersonService } from 'src/app/service/person-service';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss']
})
export class IncomeListComponent implements OnInit {

  incomes: Income[] = [];
  person: Person = new Person();
  id: number = 0;

  constructor(private incomeService: IncomeService, private personService: PersonService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.personService.getPersonById(this.id).subscribe(response =>{
      this.person = response
    });

    this.incomeService.getIncomeAllByPersonId(this.id).subscribe(response => {
      this.incomes = response;
    },
      error => console.log(error));
  }
}
