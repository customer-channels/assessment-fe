import { Injectable, EventEmitter } from '@angular/core';
import {  } from 'events';
import { Todo } from '../interfaces/todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoTextInput: string = '';
  cacheEditText: string = '';
  idNewItem: number = 3;

  todos: Todo[] = [
    {
      id: 0,
      text: 'Code Todo App',
      completed: true,
      editing: false
    },
    {
      id: 1,
      text: 'Submit Task',
      completed: false,
      editing: false
    },
    {
      id: 2,
      text: 'Get Response',
      completed: false,
      editing: false
    }
  ];

  constructor() { }

  addItem(todoTextInput: string): void {
    if (todoTextInput.trim().length === 0) {
      return;
    }

    this.todos.push({
      id: this.idNewItem,
      text: todoTextInput,
      completed: false,
      editing: false
    });

    this.idNewItem++;
  }

  deleteItem(id: number): void {
    console.log('---------')
    console.log(id)
    console.log(this.todos);
    /*
    this.todos = this.todos.filter((item) => {
      console.log(item)
      return item.id !== id
    });*/
    const index = this.todos.findIndex(item => item.id === id);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

  editItem(item: Todo): void {
    this.cacheEditText = item.text
    item.editing = true;
  }

  finishEditing(item: Todo): void {
    if (item.text.trim().length === 0) {
      item.text = this.cacheEditText
    }
    item.editing = false;
  }

  cancelEditing(item: Todo): void {
    item.text = this.cacheEditText
    item.editing = false;
  }

  clearCompleted() {
    this.todos = this.todos.filter((t) => !t.completed);

  }
}
