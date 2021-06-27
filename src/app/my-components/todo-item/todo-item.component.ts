import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { todos } from 'src/app/todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: todos;
  @Input() i:number;
  @Output() todoDelete: EventEmitter<todos> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<todos> = new EventEmitter();
  constructor() { 
    this.todo ={
      sno : 0,
      title : "title",
      desc : "description",
      active : false
    }
    this.i=0;
  }

  ngOnInit(): void {
  }
   onClick(todo:todos){
      this.todoDelete.emit(todo); 
   }
   onCheckBoxClick(todo:todos){
     this.todoCheckBox.emit(todo);
   }
}
