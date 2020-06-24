import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.scss']
})
export class TodoListContainerComponent implements OnInit {

  loading$: Observable<boolean>;
  entities$: Observable<Todo[]>;

  constructor(private todoService: TodoService) {
    this.entities$ = todoService.entities$;
    this.loading$ = todoService.loading$;
  }

  ngOnInit() {
    this.getAll();
  }

  add(todo: Todo) {
    this.todoService.add(todo);
  }

  delete(todo: Todo) {
    this.todoService.delete(todo.id);
  }

  getAll() {
    this.todoService.getAll();
  }

  update(todo: Todo) {
    this.todoService.update(todo);
  }

}
