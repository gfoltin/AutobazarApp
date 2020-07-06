import { Component, OnInit, OnDestroy } from '@angular/core';
import { BasicAuthService } from '../service/basic-auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  username: string = '';
  navigationSubscription: any;

  constructor(public basicAuthService: BasicAuthService, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
    this.refreshUsername();
  }

  ngOnInit(): void {
    this.refreshUsername();
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {  
       this.navigationSubscription.unsubscribe();
    }
  }

  public refreshUsername(){
    this.username = this.basicAuthService.getAuthenticatedUser();
  }

}
