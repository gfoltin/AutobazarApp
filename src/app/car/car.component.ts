import { Component, OnInit } from '@angular/core';
import { Car } from '../car-list-user/car-list-user.component';
import { CarDataService } from '../service/data/car-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  id: number;
  username: string;
  car: Car;

  constructor(private carService: CarDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.username = this.route.snapshot.params["name"];
    this.car = new Car(this.id, this.username, "", "", "", "", "", "");

    if (this.id != -1){
      this.carService.retrieveCar(this.username, this.id).subscribe(
        data => this.car = data
      )
    }
  }

  saveCar(){
    if(this.id == -1){
      this.carService.createCar(this.username, this.car).subscribe(
        data => {
          this.router.navigate(["usercars"]);
        }
      );
    } else {
      this.carService.updateCar(this.username, this.id, this.car).subscribe(
        data => {
          this.router.navigate(["usercars"]);
        }
      );
    }
  }

}
