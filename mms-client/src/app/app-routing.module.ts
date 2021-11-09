import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeCreateComponent } from './client/components/income/income-create/income-create.component';
import { IncomeListComponent } from './client/components/income/income-list/income-list.component';
import { PersonCreateComponent } from './client/components/person/person-create/person-create.component';
import { PersonDeleteComponent } from './client/components/person/person-delete/person-delete.component';
import { PersonDetailsComponent } from './client/components/person/person-details/person-detailscomponent';
import { PersonEditComponent } from './client/components/person/person-edit/person-edit.component';
import { PersonListComponent } from './client/components/person/person-list/person-list.component';

const routes: Routes = [
  //  { path: 'client', loadChildren: './client/client.module#ClientModule' }
  { path: '', component: PersonListComponent },
  { path: 'persons', component: PersonListComponent },
  { path: 'person-create', component: PersonCreateComponent },
  { path: 'person-edit/:id', component: PersonEditComponent },
  { path: 'person-delete/:id', component: PersonDeleteComponent },
  { path: 'person-details/:id', component: PersonDetailsComponent },
  { path: 'income-create/:id', component: IncomeCreateComponent },
  { path: 'income-list/:id', component: IncomeListComponent },
  { path: '**', redirectTo: 'persons', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
