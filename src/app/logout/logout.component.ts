import { Component, OnInit } from '@angular/core';
import { BasicAuthService } from '../service/basic-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private basicAuthService: BasicAuthService, private router: Router) { }

  ngOnInit(): void {
    this.basicAuthService.logout();
    this.router.navigate(['login']);
  }

}
