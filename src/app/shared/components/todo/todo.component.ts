import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/core/models/todo.model';
import { TodoDataService } from 'src/app/core/services/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  // init default
  @Input() public todo: Todo = {id: '', title: '', complete: false};

  // init data service
  constructor(private todoDataService: TodoDataService) { }

  /**
   * call to service toggle complete state
   * @param todo 
   */
  public toggleComplete( todo: Todo ): void
  {
    this.todoDataService.toggleComplete(todo);
  }

  /**
   * call to service function remove
   * @param selectedTodo 
   */
  public remove( todo: Todo ): void
  {
    this.todoDataService.remove( todo );
  }

}
