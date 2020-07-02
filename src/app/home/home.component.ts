import { Component, OnInit } from '@angular/core';
import { BasicAuthService } from '../service/basic-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string = '';

  constructor(private basicAuthService: BasicAuthService) { }

  ngOnInit(): void {
    this.name = this.basicAuthService.getAuthenticatedUser();
  }

}
