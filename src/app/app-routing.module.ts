import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './my-components/todos/todos.component';
import { AboutComponent } from './my-components/about/about.component';
const routes: Routes = [
   { path:'', component: TodosComponent},
   { path:'about',component: AboutComponent}
   ]; 

 @NgModule({
   imports: [
   RouterModule.forRoot(routes)
   ],
   exports: [
   RouterModule
   ],
   declarations: []
   })
export class AppRoutingModule { }
