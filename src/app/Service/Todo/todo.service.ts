import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Todo } from 'src/app/Todo';
import { catchError, throwError } from 'rxjs';
import { EditTodo } from 'src/app/EditTodo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
private baseUrl = 'https://localhost:7101/api/';
  constructor(private http: HttpClient) { }
  getMyTodoList() {
  const token = localStorage.getItem('Authorization');
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
  };
   
  return this.http.get(`${this.baseUrl}Todo/mytodos`, httpOptions);
  }

  
addTodoItem(todoItem: Todo): Observable<any> {
    const token = localStorage.getItem('Authorization');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(`${this.baseUrl}Todo/mytodos`, todoItem, httpOptions)
        .pipe(catchError((error: any) => {
            console.log(error.errors);
            return throwError(error);
        }));
}

  
  updateTodo(id: number,todoItem: EditTodo): Observable<EditTodo[]> {
          const token = localStorage.getItem('Authorization');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
    return this.http.patch<EditTodo[]>(
     `${this.baseUrl}Todo/mytodos/${id}`,
      todoItem,httpOptions
    );
    }
}
