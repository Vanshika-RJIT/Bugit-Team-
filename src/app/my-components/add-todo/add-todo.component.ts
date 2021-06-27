import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { todos } from 'src/app/todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
 title!: string;
 desc!: string;
 @Output() todoAdd: EventEmitter<todos> = new EventEmitter();
  
 constructor() { 
 }
  ngOnInit(): void {
  }
  onSubmit(){
    const todo ={
      sno: 0,
      title: this.title,
      desc: this.desc,
      active: true
      
    }
    this.todoAdd.emit(todo);
    
  }
}
