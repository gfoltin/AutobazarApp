import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterDataService {

  constructor(private http: HttpClient) { }

  addUser(user){
    return this.http.post(`${API_URL}/users/sign-up`, user);
  }
}
