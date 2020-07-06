import { Component, OnInit } from '@angular/core';
import { BasicAuthService } from '../service/basic-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string = '';

  constructor(public basicAuthService: BasicAuthService) { }

  ngOnInit(): void {
    this.refreshUsername();
  }

  public refreshUsername(){
    this.username = this.basicAuthService.getAuthenticatedUser();
  }

}
