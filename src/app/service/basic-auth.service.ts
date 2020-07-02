import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = "token";
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  constructor(private http: HttpClient) { }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user===null);
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken(){
    console.log("Token to request: " + sessionStorage.getItem(TOKEN));
    if(this.getAuthenticatedUser()) return sessionStorage.getItem(TOKEN);
  }

  executeJWTAuthentication(username, password){
    return this.http.post(`${API_URL}/login`, {
      username,
      password
    }, 
    { observe: 'response' }
    )
    .pipe(
      map(
        response => {
          console.log(response);
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, response.headers.get('Authorization'));
          console.log("Username: " + username);
          console.log("Token: " + response.headers.get('Authorization'));
          return response;
        }
      )
    )
  }
}
