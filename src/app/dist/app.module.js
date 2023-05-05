"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var angular_jwt_1 = require("@auth0/angular-jwt");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var ngx_webstorage_1 = require("ngx-webstorage");
var todo_component_1 = require("./Todo/todo/todo.component");
var app_routing_module_1 = require("./app-routing.module");
var home_component_1 = require("./home/home.component"); // <-- Add this line
var filter_complete_pipe_1 = require("./Todo/filter-complete.pipe");
var router_1 = require("@angular/router");
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
var common_1 = require("@angular/common");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                todo_component_1.TodoComponent,
                home_component_1.HomeComponent,
                filter_complete_pipe_1.FilterCompletePipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                core_1.NgModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                common_1.CommonModule,
                angular_jwt_1.JwtModule.forRoot({
                    config: {
                        tokenGetter: function tokenGetter() {
                            return localStorage.getItem('Authorization');
                        }
                    }
                }),
                app_routing_module_1.AppRoutingModule // <-- Add this line
            ],
            providers: [ngx_webstorage_1.LocalStorageService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
