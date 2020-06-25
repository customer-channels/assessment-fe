import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TODO_LIST_ROUTE, EMPTY_ROUTE } from './app.constants';


const routes: Routes = [
  {
    path: EMPTY_ROUTE,
    loadChildren: () => import('./home/home.module')
        .then(m => m.HomeModule)
  },
  {
    path: TODO_LIST_ROUTE,
    loadChildren: () => import('./features/todo-list/todo-list.module')
        .then(m => m.TodoListModule)
  },
  {
    path: '**',
    redirectTo: EMPTY_ROUTE
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
