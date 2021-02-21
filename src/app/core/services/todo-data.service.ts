import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { v4 as uuidv4 } from 'uuid';

/**
 * Service managing single source of truth for Todo list data
 * @ref https://en.wikipedia.org/wiki/Single_source_of_truth
 */
@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  // local data state for todos
  public todos: Todo[] = [];

  // init todo list
  constructor(){ 
    this.getTodos('todoList');
  }

  /**
   * simple getter for all Todos
   */
  public getTodos(key: string): Todo[]
  {
    return this.getLocalStorage(key);
  }

  /**
   * add new todo to local state
   * @param todo 
   */
  public add(todo: Todo): void
  {
    // give a unique id
    todo.id = uuidv4();
    
    if(todo.id)
    {
      // add todo to array
      this.todos.push(todo);
      // save data to local storage
      this.setLocalStorage('todoList', this.todos);
    }
  }

  /**
   * update complete state property
   * @param todo 
   */
  public toggleComplete(todo: Todo): void
  {
    // toggle complete value
    todo.complete = !todo.complete;
    // save data to local storage
    this.setLocalStorage('todoList', this.todos);
  }

  /**
   * (Optional) remove selected todo
   * @param selectedTodo 
   */
  public remove(selectedTodo: Todo): void
  {
    // filter selected value
    this.todos = this.todos.filter( todo => todo !== selectedTodo )
    // save data to local storage
    this.setLocalStorage('todoList', this.todos);
  }

  /**
   * Saves list as key-value pair to persistent local storage
   * @param key   | string identifier
   * @param value | Todo[] list to save
   */
  public setLocalStorage(key: string, value: Todo[]): void
  {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Loads list given its correspondent local storage key
   * @param key | Todo[] list to get
   */
  public getLocalStorage(key: string): Todo[]
  {
    // check if Storage entry exists
    if(localStorage.getItem(key) !== null)
      // then update local parsed values
      this.todos = JSON.parse(localStorage.getItem(key));

    // return local todos
    return this.todos;
  }
}
