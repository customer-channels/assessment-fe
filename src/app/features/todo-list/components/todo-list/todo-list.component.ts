import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo';
import { SelectableSettings, RowArgs } from '@progress/kendo-angular-grid';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public addTodoForm: FormGroup;
  public selectableSettings: SelectableSettings;
  public selectedItems: Todo[] = [];

  @Input() gridData: Todo[];
  @Input() gridLoading: boolean;
  @Output() addTodo = new EventEmitter<Todo>();
  @Output() deleteTodo = new EventEmitter<Todo>();


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.setSelectableSettings();
  }

  createForm() {
    this.addTodoForm = this.fb.group({title: ['']});
  }

  setSelectableSettings() {
    this.selectableSettings = {
      checkboxOnly: true,
    };
  }

  onEnterKeyPressed(event) {
    if (event.keyCode === 13) {
      const entity = new Todo(this.addTodoForm.get('title').value.trim());
      this.addTodo.emit(entity);
    }
  }

  public gridSelectionHandler(context: RowArgs) {
    return context.dataItem;
  }

  isSelectedItem(dataItem: Todo) {
    const selectedTodos: Todo[] = this.selectedItems.filter(item => item.id === dataItem.id);
    return selectedTodos.length === 0 ? false : true;
  }


  removeItem(dataItem: Todo) {
    this.deleteTodo.emit(dataItem);
  }
}
