import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { PersonListComponent } from './client/person-list/person-list.component';
import { PersonCreateComponent } from './client/person-create/person-create.component';
import { PersonEditComponent } from './client/person-edit/person-edit.component';
import { PersonDeleteComponent } from './client/person-delete/person-delete.component';
import { PersonDetailsComponent } from './client/person-details/person-get-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonCreateComponent,
    PersonEditComponent,
    PersonDeleteComponent,
    PersonDetailsComponent,
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
