"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, jwtHelper, localStorage, userService) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.localStorage = localStorage;
        this.userService = userService;
        this.email = "";
        this.password = "";
        this.loginn = new core_1.EventEmitter();
    }
    LoginComponent.prototype.onLogin = function (token) {
        this.loginn.emit(token);
    };
    LoginComponent.prototype.login = function () {
        this.userService.login(this.email, this.password);
    };
    __decorate([
        core_1.Output()
    ], LoginComponent.prototype, "loginn");
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=login.component.js.map
