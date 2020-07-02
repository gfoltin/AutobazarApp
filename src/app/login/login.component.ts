import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthService } from '../service/basic-auth.service';
import { HttpResponse } from '@angular/common/http';
import { Config } from 'protractor';

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
