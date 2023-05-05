import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LocalStorageService } from 'ngx-webstorage';
import { TodoComponent } from './Todo/todo/todo.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component'; // <-- Add this line


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TodoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('Authorization');
        },
      },
    }),
     AppRoutingModule // <-- Add this line
  ],
  providers: [LocalStorageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }