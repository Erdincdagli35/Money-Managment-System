import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { PersonListComponent } from './client/components/person/person-list/person-list.component';
import { PersonCreateComponent } from './client/components/person/person-create/person-create.component';
import { PersonEditComponent } from './client//components/person/person-edit/person-edit.component';
import { PersonDeleteComponent } from './client/components/person/person-delete/person-delete.component';
import { PersonDetailsComponent } from './client/components/person/person-details/person-detailscomponent';

import { IncomeCreateComponent } from './client/components/income/income-create/income-create.component';
import { IncomeListComponent } from './client/components/income/income-list/income-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonCreateComponent,
    PersonEditComponent,
    PersonDeleteComponent,
    PersonDetailsComponent,
    IncomeCreateComponent,
    IncomeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
