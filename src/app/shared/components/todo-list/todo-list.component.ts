import { Component, OnInit } from '@angular/core';
import { TodoList } from 'src/app/core/models/todo-list.model';
import { Todo } from 'src/app/core/models/todo.model';
import { TodoDataService } from 'src/app/core/services/todo-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements TodoList {

  // local new todo object
  public newTodo: Todo = new Todo();

  // init data service
  constructor(private todoDataService: TodoDataService) 
  { }

  // getter for todos data state
  get todos(): Todo[] 
  {
    return this.todoDataService.todos;
  }

  /**
   * call to service function add
   */
  public addTodo(): void
  {
    // add new todo instance
    this.todoDataService.add(this.newTodo);
    // return to default state
    this.newTodo = new Todo();
  }

}
