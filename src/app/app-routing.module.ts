import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TODO_LIST_ROUTE } from './app.constants';


const routes: Routes = [
  {
    path: TODO_LIST_ROUTE,
    loadChildren: () => import('./features/todo-list/todo-list.module')
        .then(m => m.TodoListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
