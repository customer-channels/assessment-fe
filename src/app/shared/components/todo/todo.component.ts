import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/core/models/todo.model';
import { TodoDataService } from 'src/app/core/services/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() public todo: Todo;

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit(): void {
  }

  public toggleComplete( todo: Todo ): void
  {
    this.todoDataService.toggleComplete(todo);
  }


}
