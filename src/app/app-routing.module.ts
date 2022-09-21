import { GetOpenDataComponent } from './get-open-data/get-open-data.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ErrorHandleComponent } from './error-handle/error-handle.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"Home",component:HomeComponent},
  {path:"GetOpenData",component:GetOpenDataComponent},
  {path:"TodoList",component:TodoListComponent},
  {path:"ContactUS",component:ContactUSComponent},
  {path:"Profile",component:ProfileComponent},
  {path:"**",component:ErrorHandleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
