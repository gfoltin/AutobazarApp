import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterDataService } from '../service/data/register-data.service';

export class User {
  constructor(
    public username: string,
    public password: string
  ){
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  confirmpassword: string = '';

  constructor(private registerService: RegisterDataService, private router: Router) { }

  ngOnInit(): void {
    this.user = new User('', '');
  }

  saveUser(){
    this.registerService.addUser(this.user).subscribe(
      data => {
        this.router.navigate(['login']);
        alert('User successfully registered');
      }
    );
  }
}
