import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { BasicAuthService } from './basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private basicAuthService: BasicAuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot){
    if (this.basicAuthService.isUserLoggedIn()) return true;
    this.router.navigate(['login']);
    return false;
  }
}
