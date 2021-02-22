import { TestBed, inject } from '@angular/core/testing';
import { Todo } from '../core/models/todo.model';

import { TodoDataService } from '../core/services/todo-data.service';

describe('TodoDataService', () => {
  let service: TodoDataService;

  beforeEach(() => {
    // inject needed service
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoDataService);

    // create mock local storage system
    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };

    // intercept local storage method calls
    spyOn(localStorage, 'getItem')
    .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should inject data service', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getTodos()', () => {

    it('should return an empty array by default', inject([TodoDataService], (service: TodoDataService) => {
      expect(service.getTodos()).toEqual([]);
    }));

    it('should return a list with current todos', inject([TodoDataService], (service: TodoDataService) => {
      let todoA = new Todo();
      let todoB = new Todo();
      todoA.title = 'Check my email';
      todoB.title = 'Test my software';
      service.add(todoA);
      service.add(todoB);
      expect(service.getTodos()).toEqual([todoA, todoB]);
    }));
  });

  describe('#add(todo)', () => {

    it('should add a new todo to the current list', inject([TodoDataService], (service: TodoDataService) => {
      expect(service.getTodos()).toEqual([]);
      let todoA = new Todo({title: 'Learning React Native', complete: false});
      service.add(todoA);
      expect(service.getTodos()).toEqual([todoA]);
    }));
  });

  describe('#remove(selectedTodo)', () => {

    it('should remove a todo selected by the user', inject([TodoDataService], (service: TodoDataService) => {
      let todoA = new Todo({title: 'Build a house', complete: false});
      let todoB = new Todo({title: 'Drink some coffee', complete: true});
      service.add(todoA);
      service.add(todoB);
      expect(service.getTodos()).toEqual([todoA, todoB]);
      service.remove(todoB);
      expect(service.getTodos()).toEqual([todoA]);
      service.remove(todoA);
      expect(service.getTodos()).toEqual([]);
    }));
  });

  describe('#toggleComplete(todo)', () => {

    it('should invert the complete property value', inject([TodoDataService], (service: TodoDataService) => {
      let todoA = new Todo({title: 'Build a house', complete: false});
      service.add(todoA);
      service.toggleComplete(todoA);
      expect(todoA.complete).toEqual(true);
      service.toggleComplete(todoA);
      expect(todoA.complete).toEqual(false);
    }));
  });

});
