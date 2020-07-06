import { Component, OnInit } from '@angular/core';
import { CarDataService } from '../service/data/car-data.service';
import { Router } from '@angular/router';
import { BasicAuthService } from '../service/basic-auth.service';

export class Car {
  constructor(
    public id: number, 
    public username: string,
    public name: string,
    public color: string,
    public engine: string,
    public price: string,
    public email: string,
    public available: string,
    ){
  }
}

@Component({
  selector: 'app-car-list-user',
  templateUrl: './car-list-user.component.html',
  styleUrls: ['./car-list-user.component.css']
})
export class CarListUserComponent implements OnInit {

  cars: Car[];
  message: string;

  constructor(private carService: CarDataService, private router: Router, private basicAuthService: BasicAuthService) { }

  ngOnInit(): void {
    this.refreshCars();
  }

  refreshCars(){
    this.carService.retrieveAllCarsByUser(this.basicAuthService.getAuthenticatedUser()).subscribe(
      response => {
        console.log(response);
        this.cars = response;
      }
    );
  }

  updateCar(id){
    this.router.navigate(["cars", id, this.basicAuthService.getAuthenticatedUser()]);
  }

  deleteCar(name, id){
    this.carService.deleteCar(this.basicAuthService.getAuthenticatedUser(), id).subscribe(
      response => {
        this.message = `Delete of car ${name} was successful.`;
        this.refreshCars();
      }
    );
  }

  addCar(){
    this.router.navigate(["cars", -1, this.basicAuthService.getAuthenticatedUser()]);
  }

}
