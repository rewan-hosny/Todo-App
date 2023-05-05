import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditTodo } from 'src/app/EditTodo';
import { TodoService } from 'src/app/Service/Todo/todo.service';
import { Todo } from '../../Todo';
import { NgModule } from '@angular/core';





@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: any[] = [];
  newItem: any = {};
  listTodo: EditTodo[] = [];
  filteredListTodo: EditTodo[] = [];

  isCompleted: boolean | null = null;
  id: number = 0;
  @Input() todo?: Todo;
  @Output() TodoUpdate = new EventEmitter<Todo[]>();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTodoList();
  }

  loadTodoList() {
    this.todoService.getMyTodoList(this.isCompleted).subscribe(
      (result: any) => {
        this.listTodo = result;
        this.filteredListTodo = this.listTodo.filter(todo => {
          if (this.isCompleted === null) {
            return true; // show all items if isCompleted is null
          } else {
            return todo.isComplete === this.isCompleted;
          }
        });
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  toggleCompleted(isCompleted: boolean | null) {
    this.isCompleted = isCompleted;
    this.loadTodoList();
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

// deleteTodoItem(id: number): void {
//   this.id = id;
//   const modal = (<any>$('#ConfirmDeleteComponent'));
//   modal.modal('show');
// }

  

  // confirmDelete() {
  //   this.todoService.DeleteTodo(this.id).subscribe(
  //     () => {
  //       console.log(`Todo item with ID ${this.id} deleted successfully.`);
  //       this.loadTodoList();
  //     },
  //     (error: any) => {
  //       console.log(`Error deleting todo item with ID ${this.id}: ${error}`);
  //     }
  //   );
  // }
  // openDeleteConfirmationModal(id: number) {
  //   const modalRef = this.modalService.open(ConfirmDeleteComponent, { centered: true });
  //   modalRef.componentInstance.delete.subscribe(() => {
  //     this.todoService.DeleteTodo(id).subscribe(
  //       () => {
  //         console.log(`Todo item with ID ${id} deleted successfully.`);
  //         this.loadTodoList();
  //       },
  //       (error: any) => {
  //         console.log(`Error deleting todo item with ID ${id}: ${error}`);
  //       }
  //     );
  //   });
  // }



  // deleteTodoItem(id: number): void {
  //   if(confirm('Are you sure you want to delete this item?')) {
  //     this.todoService.DeleteTodo(id).subscribe(
  //       () => {
  //         console.log(`Todo item with ID ${id} deleted successfully.`);
  //         this.loadTodoList();
  //       },
  //       (error: any) => {
  //         console.log(`Error deleting todo item with ID ${id}: ${error}`);
  //       }
  //     );
  //   }
  // }


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


  updateTodomode(item: EditTodo) {
    item.editMode = !item.editMode;
  }

}




