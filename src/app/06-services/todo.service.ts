import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

export class TodoService {
  constructor(private http: HttpClient) {}

  add(todo: any) {
    //return this.http.post('...', todo).map((r: any) => r.json());
  }

  getTodos() {
    //return this.http.get('...').map((r: any) => r.json());
  }

  delete(id: any) {
    //return this.http.delete('...').map((r: any) => r.json());
  }
}
