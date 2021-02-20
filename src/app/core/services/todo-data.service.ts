import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  // local data state for todos
  public todos: Todo[] = [];

  // init empty
  constructor(){ }

  /**
   * simple getter for all Todos
   */
  public getTodos(): Todo[]
  {
    return this.todos;
  }

  /**
   * add new todo to local state
   * @param todo 
   */
  public add(todo: Todo): void
  {
    // give a unique id
    todo.id = uuidv4();
    // add todo to array
    if(todo.id) this.todos.push(todo);
  }

  /**
   * update complete state property
   * @param todo 
   */
  public toggleComplete(todo: Todo): void
  {
    todo.complete = !todo.complete;
    console.log(this.todos);
  }

  /**
   * (Optional) remove selected todo
   * @param selectedTodo 
   */
  public remove(selectedTodo: Todo): void
  {
    this.todos = this.todos.filter( todo => todo !== selectedTodo )
    console.log(this.todos);
  }
}
