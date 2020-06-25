import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.scss']
})
export class TodoListContainerComponent implements OnInit {

  loading$: Observable<boolean>;
  entities$: Observable<Todo[]>;

  constructor(
    private todoService: TodoService,
    private toastr: ToastrService) {

    this.entities$ = todoService.entities$;
    this.loading$ = todoService.loading$;

  }

  ngOnInit() {
    this.getAll();
  }

  add(todo: Todo) {
    this.todoService.add(todo).subscribe((response: any) => {
      const successMsg =
      `ADDED todo task with id ${response.id} and title ${response.title}`;
      this.toastr.success(successMsg);
  }, errorResp => {
      const errorMsg = `${errorResp.error.error.errors[0]}`;
      this.toastr.error(errorMsg ? errorMsg : 'Unexpected error');
  });
  }

  delete(todo: Todo) {
    this.todoService.delete(todo.id).subscribe((response: any) => {
      const successMsg =
      `REMOVED todo task with ${todo.id} `;
      this.toastr.success(successMsg);
  }, errorResp => {
      const errorMsg = `${errorResp.error.error.errors[0]}`;
      this.toastr.error(errorMsg ? errorMsg : 'Unexpected error');
  });
  }

  getAll() {
    this.todoService.getAll();
  }

  update(todo: Todo) {
    this.todoService.update(todo);
  }

}
