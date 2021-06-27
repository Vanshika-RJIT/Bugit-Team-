import { Component } from '@angular/core';
import { TodosComponent } from './my-components/todos/todos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app-list';
  // constructor(){  //This method will execute after 3 seconds
  //   setTimeout(() => {
  //     this.title = 'Everyone';
  //   },3000);
  // }
}
