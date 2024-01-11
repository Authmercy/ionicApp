import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DatanigeriaService {

  constructor(private http:HttpClient,) { }

  getHotels(){
   return this.http.get("https://api.geoapify.com/v2/places?categories=accommodation.hotel&filter=place:5157a6a9aff8ff1f405913dacde737332340f00101f90113f1020000000000c0020b9203074e696765726961&limit=50&apiKey=549757e660ae405c93a95c0ba18a27ee")
  }
  getSupermarche(){
  return this.http.get("https://api.geoapify.com/v2/places?categories=commercial.supermarket&filter=place:5157a6a9aff8ff1f405913dacde737332340f00101f90113f1020000000000c0020b9203074e696765726961&limit=50&apiKey=549757e660ae405c93a95c0ba18a27ee")
  }
  getLoisir(){
    return this.http.get("https://api.geoapify.com/v2/places?categories=leisure&filter=place:5157a6a9aff8ff1f405913dacde737332340f00101f90113f1020000000000c0020b9203074e696765726961&limit=50&apiKey=549757e660ae405c93a95c0ba18a27ee ")
  }
  getShopping(){
    return this.http.get("https://api.geoapify.com/v2/places?categories=commercial.clothing&filter=place:5157a6a9aff8ff1f405913dacde737332340f00101f90113f1020000000000c0020b9203074e696765726961&limit=50&apiKey=549757e660ae405c93a95c0ba18a27ee")
  }
  getRestaurant(){
    return this.http.get("https://api.geoapify.com/v2/places?categories=commercial.food_and_drink&filter=place:5157a6a9aff8ff1f405913dacde737332340f00101f90113f1020000000000c0020b9203074e696765726961&limit=50&apiKey=549757e660ae405c93a95c0ba18a27ee")
  }
}
