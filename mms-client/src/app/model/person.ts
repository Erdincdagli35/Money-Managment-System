import { Income } from '../model/income';

export class Person {

        public id?: number;
        public name?: string;
        public surname?: string;
        public job?: string;

        public incomes?: Income[];

        constructor(id?: number, name?: string, surname?: string, job?: string, incomes?: Income[]) { }
}
