import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TodoListService } from 'src/app/services/todo-list.service';
import { Task } from './model/Task';
import { FormControl, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  newTask = new FormControl('',[Validators.required, Validators.minLength(3)]);

  tasks : Task[] = [];


  constructor(
    private todoListService: TodoListService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }


  ngOnInit(): void {
    this.getAllTasks();
  }


  getAllTasks() {
    this.todoListService.get(`${environment.backendUrl}/task`).subscribe(
      (res : Task[]) => {
        this.tasks = res;
      }
    )
  }

  createTask(text:string) {

    if (this.newTask.valid) {  
      let task = new Task(text, false);

      this.todoListService.post(`${environment.backendUrl}/task`, task).subscribe(
        (res : Task[]) => {
          this.newTask.reset();
          this.getAllTasks();
          this.messageService.add({
            severity: "success",
            summary: "Created",
            detail: "Task have been created"
          });
        }
      );
    }
    
  }

  updateTask(task:Task) {
    this.todoListService.put(`${environment.backendUrl}/task/${task.id}`, task).subscribe(
      (res : Task[]) => {
        this.getAllTasks();
        this.messageService.add({
          severity: "success",
          summary: "Updated",
          detail: "Task have been updated"
        });
      }
    )
  }

  deleteTask(task:Task) {
    this.todoListService.delete(`${environment.backendUrl}/task/${task.id}`).subscribe(
      (res : Task[]) => {
        this.getAllTasks();
        this.messageService.add({
          severity: "success",
          summary: "Deleted",
          detail: "Task have been deleted"
        });
      }
    )
  }

  confirmDelete(event: Event, task: Task) {
    this.confirmationService.confirm({
      target: event.target,
      message: "Are you sure that you want to delete this task?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.deleteTask(task);
      }
    });
  }
}
