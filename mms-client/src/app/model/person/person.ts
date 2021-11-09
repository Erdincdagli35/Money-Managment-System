import { Income } from "../income/income";

export class Person {
  constructor(public id?: number, public name?: string, public surname?: string,public job?: string, public incomes?: Income[]) { }
}
