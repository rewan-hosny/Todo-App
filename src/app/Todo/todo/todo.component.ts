import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditTodo } from 'src/app/EditTodo';
import { TodoService } from 'src/app/Service/Todo/todo.service';
import {Todo} from '../../Todo'

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: any[] = [];
  newItem: any = {};
  listTodo: EditTodo[] = [];
  id: number=0;
   @Input() todo?: Todo;
  @Output() TodoUpdate = new EventEmitter<Todo[]>();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTodoList();
  }

 loadTodoList() {
  this.todoService.getMyTodoList().subscribe(
    (result: any) => {
      this.listTodo = result;
    },
    (error: any) => {
      console.log(error);
    }
  );
}

 
  addTodoItem(): void {
    this.todoService.addTodoItem(this.newItem).subscribe(
      (response: any) => {
        console.log(response);
        this.newItem = new Todo();
        this.loadTodoList();
      },
      (error: any) => {
        console.log(error);
        console.log(error.error.errors); // add this line to log the specific error messages
      }
    );
  }
  

updateTodoItem(todo: EditTodo): void {
  this.todoService.updateTodo(todo.id, todo).subscribe(
    () => {
      console.log(`Todo item with ID ${todo.id} updated successfully.`);
      this.loadTodoList();
    },
    (error: any) => {
      console.log(`Error updating todo item with ID ${todo.id}: ${error}`);
    }
  );
}

  createTodo() {
    this.todoService.addTodoItem(this.newItem).subscribe(
      (response: any) => {
        console.log(response);
        this.newItem = new Todo();
        this.loadTodoList();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


  }

