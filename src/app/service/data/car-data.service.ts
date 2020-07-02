import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from 'src/app/car-list-user/car-list-user.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class CarDataService {

  constructor(private http: HttpClient) { }

  retrieveAllCars(){
    return this.http.get<Car[]>(`${API_URL}/cars`);
  }

  retrieveAllCarsByUser(username){
    return this.http.get<Car[]>(`${API_URL}/users/${username}/cars`);
  }

  retrieveAllCarsByFilter(filter, option){
    return this.http.get<Car[]>(`${API_URL}/cars/${filter}/${option}`);
  }

  retrieveCar(username, id){
    return this.http.get<Car>(`${API_URL}/users/${username}/cars/${id}`);
  }

  createCar(username, car){
    console.log(car);
    return this.http.post(`${API_URL}/users/${username}/cars`, car);
  }

  updateCar(username, id, car){
    return this.http.put(`${API_URL}/users/${username}/cars/${id}`, car);
  }

  deleteCar(username, id){
    return this.http.delete(`${API_URL}/users/${username}/cars/${id}`);
  }
}
