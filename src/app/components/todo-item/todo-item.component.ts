import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from '../../interfaces/todo'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item: Todo;
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  deleteItem() {
    
    //console.log(this.item)
    this.todoService.deleteItem(this.item.id);
  }

  finishEditing() {
    this.todoService.finishEditing(this.item);
  }

  cancelEditing() {
    this.todoService.cancelEditing(this.item);
  }

  editItem() {
    this.todoService.editItem(this.item);
  }

}
