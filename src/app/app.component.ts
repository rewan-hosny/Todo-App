import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit{
  ngOnInit(): void {
    var token = localStorage.getItem('Authorization');
    this.isloggedIn = !!token;
  }
  isloggedIn: boolean = false;
  ngOnChanges(changes: SimpleChanges): void {
    var token = localStorage.getItem('Authorization');
    this.isloggedIn = !!token;
  }
  title = 'Todo.UI';
    isLoggedIn = false;


  }

