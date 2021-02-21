import { TestBed, inject } from '@angular/core/testing';
import { Todo } from '../core/models/todo.model';

import { TodoDataService } from '../core/services/todo-data.service';

describe('TodoDataService', () => {
  let service: TodoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should inject data service', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTodos()', () => {

    localStorage.removeItem('todoList');

    it('should return an empty array by default', inject([TodoDataService], (service: TodoDataService) => {
      expect(service.getTodos('todoList')).toEqual([]);
    }));


  });

});
