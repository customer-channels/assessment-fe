import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';


@Injectable({
  providedIn: 'root'
})
export class TodoService extends EntityCollectionServiceBase<Todo> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super(Todo.name, serviceElementsFactory);
}
}
