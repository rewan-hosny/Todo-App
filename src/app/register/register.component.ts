import { Component } from '@angular/core';
import { UserService } from '../Service/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    Email: string = "";
  password: string = "";
  Name: string = "";
 

  constructor(private userService: UserService) {}

  register() {
    
    this.userService.register(this.Email,this.Name,this.password);
  }
}
