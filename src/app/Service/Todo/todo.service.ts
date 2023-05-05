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
  
getMyTodoList(isCompleted: boolean | null = null) {
  const token = localStorage.getItem('Authorization');
  let url = `${this.baseUrl}Todo/mytodos`;

  // If isCompleted is provided, add it as a query parameter to the URL
  if (isCompleted !== null) {
    url += `?isCompleted=${isCompleted}`;
  }

  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
  };
   
  return this.http.get(url, httpOptions);
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
    DeleteTodo(id: number): Observable<any> {
          const token = localStorage.getItem('Authorization');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
    return this.http.delete<any>(
     `${this.baseUrl}Todo/mytodos/${id}`,
     httpOptions
    );
    }
}
