import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { TodoTasksAppLauncherComponent } from './components/todo-tasks-app-launcher/todo-tasks-app-launcher.component';

const routes: Routes = [
  { path: '', component: TodoTasksAppLauncherComponent}
];


@NgModule({
  declarations: [TodoTasksAppLauncherComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],

  exports: [
  ]
})
export class HomeModule { }
