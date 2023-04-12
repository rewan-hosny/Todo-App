"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
        this.baseUrl = 'https://localhost:7101/api/';
    }
    TodoService.prototype.getMyTodoList = function () {
        var token = localStorage.getItem('Authorization');
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Authorization': "Bearer " + token
            })
        };
        return this.http.get(this.baseUrl + "Todo/mytodos", httpOptions);
    };
    TodoService.prototype.addTodoItem = function (todoItem) {
        var token = localStorage.getItem('Authorization');
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Authorization': "Bearer " + token,
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.baseUrl + "Todo/mytodos", todoItem, httpOptions)
            .pipe(rxjs_1.catchError(function (error) {
            console.log(error.errors);
            return rxjs_1.throwError(error);
        }));
    };
    TodoService.prototype.updateTodo = function (id, todoItem) {
        var token = localStorage.getItem('Authorization');
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Authorization': "Bearer " + token,
                'Content-Type': 'application/json'
            })
        };
        return this.http.patch(this.baseUrl + "Todo/mytodos/" + id, todoItem, httpOptions);
    };
    TodoService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;

//# sourceMappingURL=todo.service.js.map
