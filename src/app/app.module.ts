import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './my-components/todos/todos.component';
import { TodoItemComponent } from './my-components/todo-item/todo-item.component';
import { AddTodoComponent } from './my-components/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent} from './my-components/about/about.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
