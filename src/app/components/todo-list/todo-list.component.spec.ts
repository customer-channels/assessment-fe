import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoService } from 'src/app/services/todo.service';

import { TodoListComponent } from './todo-list.component';


describe('TodoListComponent', () => {
  let todoService: TodoService;
  let todoServiceStub: Partial<TodoService>;
  

  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ TodoListComponent ],
      providers: [{provide: TodoService }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService);
    fixture.detectChanges();


  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
