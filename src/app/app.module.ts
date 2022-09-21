import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { GetOpenDataComponent } from './get-open-data/get-open-data.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ErrorHandleComponent } from './error-handle/error-handle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ProfileComponent,
    ContactUSComponent,
    GetOpenDataComponent,
    TodoListComponent,
    ErrorHandleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
