import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouteGuardService } from './service/route-guard.service';
import { CarListComponent } from './car-list/car-list.component';
import { CarComponent } from './car/car.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { CarListUserComponent } from './car-list-user/car-list-user.component';


const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'home/:name', component: HomeComponent, canActivate: [RouteGuardService]},
  {path:'cars', component: CarListComponent, canActivate: [RouteGuardService]},
  {path:'cars/:id/:name', component: CarComponent, canActivate: [RouteGuardService]},
  {path:'usercars', component: CarListUserComponent, canActivate: [RouteGuardService]},
  {path:'about', component: AboutComponent, canActivate: [RouteGuardService]},
  {path:'logout', component: LogoutComponent, canActivate: [RouteGuardService]},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
