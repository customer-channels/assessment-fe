import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TodoListContainerComponent } from './containers/todo-list-container/todo-list-container.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoService } from './services/todo.service';
import { GridModule } from '@progress/kendo-angular-grid';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    { path: '', component: TodoListContainerComponent}
];



@NgModule({
    declarations: [TodoListComponent, TodoListContainerComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        GridModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [TodoService]
})
export class TodoListModule { }
