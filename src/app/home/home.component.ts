import { Component } from '@angular/core';
import { UserService } from '../Service/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 constructor(
   
    private userService: UserService
  ) {}
  isAuthenticated(): boolean {
    return this.userService.isAuthenticated();
  }

}
