"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var Todo_1 = require("../../Todo");
var TodoComponent = /** @class */ (function () {
    function TodoComponent(todoService) {
        this.todoService = todoService;
        this.todoList = [];
        this.newItem = {};
        this.listTodo = [];
        this.id = 0;
        this.TodoUpdate = new core_1.EventEmitter();
    }
    TodoComponent.prototype.ngOnInit = function () {
        this.loadTodoList();
    };
    TodoComponent.prototype.loadTodoList = function () {
        var _this = this;
        this.todoService.getMyTodoList().subscribe(function (result) {
            _this.listTodo = result;
        }, function (error) {
            console.log(error);
        });
    };
    TodoComponent.prototype.addTodoItem = function () {
        var _this = this;
        this.todoService.addTodoItem(this.newItem).subscribe(function (response) {
            console.log(response);
            _this.newItem = new Todo_1.Todo();
            _this.loadTodoList();
        }, function (error) {
            console.log(error);
            console.log(error.error.errors); // add this line to log the specific error messages
        });
    };
    TodoComponent.prototype.updateTodoItem = function (todo) {
        var _this = this;
        this.todoService.updateTodo(todo.id, todo).subscribe(function () {
            console.log("Todo item with ID " + todo.id + " updated successfully.");
            _this.loadTodoList();
        }, function (error) {
            console.log("Error updating todo item with ID " + todo.id + ": " + error);
        });
    };
    TodoComponent.prototype.createTodo = function () {
        var _this = this;
        this.todoService.addTodoItem(this.newItem).subscribe(function (response) {
            console.log(response);
            _this.newItem = new Todo_1.Todo();
            _this.loadTodoList();
        }, function (error) {
            console.log(error);
        });
    };
    TodoComponent.prototype.updateTodomode = function (item) {
        item.editMode = !item.editMode;
    };
    __decorate([
        core_1.Input()
    ], TodoComponent.prototype, "todo");
    __decorate([
        core_1.Output()
    ], TodoComponent.prototype, "TodoUpdate");
    TodoComponent = __decorate([
        core_1.Component({
            selector: 'todo',
            templateUrl: './todo.component.html',
            styleUrls: ['./todo.component.css']
        })
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;

//# sourceMappingURL=todo.component.js.map
