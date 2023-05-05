"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var UserService = /** @class */ (function () {
    function UserService(http, jwtHelper, localStorage, router) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.localStorage = localStorage;
        this.router = router;
        this.baseUrl = 'https://localhost:7101/api/';
    }
    UserService.prototype.register = function (email, name, password) {
        var _this = this;
        this.http.post(this.baseUrl + "Auth/register", { email: email, name: name, password: password }, { responseType: 'text' })
            .subscribe(function (response) {
            var token = response;
            try {
                var decodedToken = _this.jwtHelper.decodeToken(token);
                localStorage.setItem('Authorization', token);
                localStorage.setItem('name', decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]);
                localStorage.setItem('userid', decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
                _this.router.navigate(['/todo']);
            }
            catch (error) {
                console.log(error);
                console.log(response);
            }
        }, function (error) {
            console.log(error);
        });
    };
    UserService.prototype.login = function (email, password) {
        var _this = this;
        this.http.post('https://localhost:7101/api/Auth/login', { email: email, password: password }, { responseType: 'text' })
            .subscribe(function (response) {
            var token = response;
            if (token) {
                var decodedToken = _this.jwtHelper.decodeToken(token);
                localStorage.setItem('Authorization', token);
                localStorage.setItem('name', decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]);
                localStorage.setItem('userid', decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
                _this.router.navigate(['/todo']);
            }
        });
    };
    // login(user: any) {
    //   return axios.post(`${this.baseUrl}Auth/login`, user)
    //     .then(response => {
    //       const token = response.data;
    //       localStorage.setItem('Authorization', token);
    //       return true;
    //     })
    //    .catch(error => {
    //     return error.response.data.error;
    //   });
    // }
    UserService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('Authorization');
        if (!token) {
            return false;
        }
        var tokenWithoutBearer = token.replace('Bearer ', '');
        return !this.jwtHelper.isTokenExpired(tokenWithoutBearer);
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('Authorization');
    };
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;

//# sourceMappingURL=user-service.service.js.map
