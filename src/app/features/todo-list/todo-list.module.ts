import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TodoListContainerComponent } from './containers/todo-list-container/todo-list-container.component';

const routes: Routes = [
    { path: '', component: TodoListContainerComponent}
];



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    providers: []
})
export class TodoListModule { }
