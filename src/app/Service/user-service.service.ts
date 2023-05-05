import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import axios from 'axios';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
private baseUrl = 'https://localhost:7101/api/';

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService,private localStorage: LocalStorageService, private router: Router) {}

register(email: string, name: string, password: string) {
  this.http.post(`${this.baseUrl}Auth/register`, { email: email, name: name, password: password },
    { responseType: 'text' })
    .subscribe(response => {
      const token = response;

      try {
        const decodedToken = this.jwtHelper.decodeToken(token);
        localStorage.setItem('Authorization', token);
        localStorage.setItem('name', decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]);
        localStorage.setItem('userid', decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
        this.router.navigate(['/todo']);
      } catch (error) {
        console.log(error);
        console.log(response);
      }
    }, error => {
      console.log(error);
    });
}



  login(email: string,password: string) {
    
    this.http.post('https://localhost:7101/api/Auth/login',
      { email: email, password: password },
      { responseType: 'text' })
      .subscribe((response) => {
        const token = response;
        if (token) {
    
      const decodedToken = this.jwtHelper.decodeToken(token);
     localStorage.setItem('Authorization', token);
    localStorage.setItem('name', decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]);
          localStorage.setItem('userid', decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
      this.router.navigate(['/todo']);
}

      },
      );
  }

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
isAuthenticated(): boolean {
  const token = localStorage.getItem('Authorization');
  if (!token) {
    return false;
  }
  const tokenWithoutBearer = token.replace('Bearer ', '');
  return !this.jwtHelper.isTokenExpired(tokenWithoutBearer);
}


  logout() {
    localStorage.removeItem('Authorization');
  }
}
