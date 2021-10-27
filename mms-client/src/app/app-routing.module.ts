import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonCreateComponent } from './client/person-create/person-create.component';
import { PersonDeleteComponent } from './client/person-delete/person-delete.component';
import { PersonEditComponent } from './client/person-edit/person-edit.component';
import { PersonDetailsComponent } from './client/person-details/person-get-by-id.component';
import { PersonListComponent } from './client/person-list/person-list.component';

const routes: Routes = [
  //  { path: 'client', loadChildren: './client/client.module#ClientModule' }
  { path: '', component: PersonListComponent },
  { path: 'persons', component: PersonListComponent },
  { path: 'person-create', component: PersonCreateComponent },
  { path: 'person-edit/:id', component: PersonEditComponent },
  { path: 'person-delete/:id', component: PersonDeleteComponent },
  { path: 'person-details/:id', component: PersonDetailsComponent },
  { path: '**', redirectTo: 'persons', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
