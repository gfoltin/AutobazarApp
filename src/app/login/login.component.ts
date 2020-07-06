import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthService } from '../service/basic-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  errorMessage = "Invalid credentials!";
  invalidLogin = false;

  constructor(private router: Router, private basicAuthService: BasicAuthService) { }

  ngOnInit(): void {
    this.router.navigate(['login']);
  }

  handleLogin(){
    this.basicAuthService.executeJWTAuthentication(this.username, this.password)
    .subscribe(
      data  => {
        this.invalidLogin = false;
        this.router.navigate(['home', this.username]);
      },
      error => {
        this.invalidLogin = true;
      }
    )
  }

}
