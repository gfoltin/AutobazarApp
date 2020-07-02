import { Component, OnInit } from '@angular/core';
import { CarDataService } from '../service/data/car-data.service';
import { Router } from '@angular/router';
import { BasicAuthService } from '../service/basic-auth.service';
import { Car } from '../car-list-user/car-list-user.component';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Car[];
  filter: string = '';
  option: string = '';

  constructor(private carService: CarDataService, private router: Router, private basicAuthService: BasicAuthService) { }

  ngOnInit(): void {
    this.carService.retrieveAllCars().subscribe(
      response => {
        this.cars = response;
      }
    );
  }

  filterCars(){
    console.log(this.filter);
    console.log(this.option);
    if (this.filter !== '' && this.option !== ''){
      this.carService.retrieveAllCarsByFilter(this.filter, this.option).subscribe(
        response => {
          this.cars = response;
        }
      );
    }else{
      this.carService.retrieveAllCars().subscribe(
        response => {
          this.cars = response;
        }
      );
    }
  }
}
