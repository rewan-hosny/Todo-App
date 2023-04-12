import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from 'ngx-webstorage';
import { UserService } from '../Service/user-service.service';
import { Token } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";
  @Output() loginn = new EventEmitter<any>();
  

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private localStorage: LocalStorageService,
    private userService: UserService
  ) {}
onLogin(token: any) {
  this.loginn.emit(token);
}
  login() {
    this.userService.login(this.email, this.password); 
    

  }


}

