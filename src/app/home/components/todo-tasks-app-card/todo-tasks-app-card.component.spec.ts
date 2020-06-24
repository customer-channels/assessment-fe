import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTasksAppCardComponent } from './todo-tasks-app-card.component';

describe('TodoTasksAppCardComponent', () => {
  let component: TodoTasksAppCardComponent;
  let fixture: ComponentFixture<TodoTasksAppCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoTasksAppCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTasksAppCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
