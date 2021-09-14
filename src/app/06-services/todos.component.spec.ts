import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, from, EMPTY, throwError } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;
  let httpClient: HttpClient;

  beforeEach(() => {
    service = new TodoService(httpClient);
    component = new TodosComponent(service);
  });

  it('should set todos property with the items returned from server', () => {
    spyOn(service, 'getTodos').and.callFake(() => {
      return from([[1, 2, 3]]);
    });

    component.ngOnInit();

    expect(component.todos.length).toBe(3);
  });

  it('should call the server to save the changes when a new item is added', () => {
    let spy = spyOn(service, 'add').and.callFake((t) => {
      return EMPTY;
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('should add the new todo returnded from the server', () => {
    let todo = { id: 1 };
    /* let spy = spyOn(service, 'add').and.callFake((t) => {
      return from([todo]);
    }); */
    let spy = spyOn(service, 'add').and.returnValue(from([todo]));

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('should set the message property when server returns an error during adding new item', () => {
    let error = 'error from the server';
    let spy = spyOn(service, 'add').and.returnValue(throwError(error));

    component.add();

    expect(component.message).toBe(error);
  });
});
