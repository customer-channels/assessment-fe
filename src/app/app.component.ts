import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly ROOT_URL = 'http://localhost:8080';

  public newTask;
  public todos: any;
  public response: any;

  constructor(private http: HttpClient) {
    this.todos = this.retrieveList();
  }

  public retrieveList() {
    return this.http.get(this.ROOT_URL + '/get');
  }

  public addTask() {
    if (this.newTask != '') {
      let response = this.http.post(this.ROOT_URL + '/add/' + this.newTask, {}).subscribe(x => {console.log(x)});
      this.newTask = '';

      this.todos = this.retrieveList();
      return response;
    }
  }

  public checkTask(id) {
    let response = this.http.put(this.ROOT_URL + '/check/' + id, {}).subscribe(x => {console.log(x)});
    this.todos = this.retrieveList();
    return response;
  }

  public deleteTask(id) {
    let response = this.http.delete(this.ROOT_URL + '/remove/' + id).subscribe(x => {console.log(x)});
    this.todos = this.retrieveList();
    return response;
  }

}
