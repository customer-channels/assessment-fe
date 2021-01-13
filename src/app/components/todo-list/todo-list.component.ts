import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from '../../interfaces/todo';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoTextInput: string;
  todos: Todo[] = []

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoTextInput = '';
    this.todos = this.todoService.todos;
  }

  addItem(): void {
    if (this.todoTextInput.trim().length === 0) {
      return;
    }

    this.todoService.addItem(this.todoTextInput)
    this.todoTextInput = '';
  }

  clearCompleted(): void {
    this.todoService.clearCompleted();
    this.todos = this.todoService.todos;
  }

}
