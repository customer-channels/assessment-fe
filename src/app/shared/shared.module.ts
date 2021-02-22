import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TodoListComponent, TodoComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
