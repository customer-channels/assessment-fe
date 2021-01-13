import { DebugElement } from '@angular/core';
import {By} from "@angular/platform-browser";
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Todo } from 'src/app/interfaces/todo';
import { TodoItemComponent } from './todo-item.component';



describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemComponent ]
    })
    .compileComponents();
  }));
g
  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;

    const mockItem: Todo = {
      id: 3,
      text: 'Wait Response',
      completed: false,
      editing: false
    }

    component.item = mockItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
