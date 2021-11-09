import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IncomeStatus } from 'src/app/model/income-status';
import { Income } from 'src/app/model/income/income';
import { Person } from 'src/app/model/person/person';
import { IncomeService } from 'src/app/service/income-service';
import { PersonService } from 'src/app/service/person-service';

@Component({
  selector: 'app-income-create',
  templateUrl: './income-create.component.html',
  styleUrls: ['./income-create.component.scss']
})
export class IncomeCreateComponent implements OnInit {
  incomeStatuses:Array<string> = Object.keys(IncomeStatus).filter(key => isNaN(+key))
  income: Income = new Income();
  person: Person = new Person();
  id: number = 0;


  constructor(private incomeService: IncomeService, private personService: PersonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personService.getPersonById(this.id).subscribe(data => {
      this.person = data;
    },
      error => console.log(error));
  }

  goToPersonList(): void {
    this.router.navigate(["/incomes"]);
  }

  onSubmit() {
    this.incomeService.createIncome(this.income, this.person.id).subscribe(data => {
      console.log(data);
      this.goToPersonList();
    },
      error => console.log(error));
  }
}
