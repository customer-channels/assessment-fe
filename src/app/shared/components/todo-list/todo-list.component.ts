import { Component, OnInit } from '@angular/core';
import { TodoList } from 'src/app/core/models/todo-list.model';
import { Todo } from 'src/app/core/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, TodoList {

  // initialize empty string
  public listName: string = '';

  // initialize empty list
  public todos: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
    // load default todos using service
  }

  public add( todo: Todo )
  {
    this.todos.push(todo)
    // update state using service
  }

  //
  public remove( selectedTodo: Todo )
  {
    this.todos = this.todos.filter( todo => todo !== selectedTodo )
    // update state using service
  }

}
