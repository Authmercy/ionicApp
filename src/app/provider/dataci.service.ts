import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataciService {


  constructor(private http:HttpClient,) { }

  getHotels(){
   return this.http.get("https://api.geoapify.com/v2/places?categories=accommodation.hotel&filter=place:512c9a7395934516c059318d70a47df51f40f00101f9010bf1020000000000c0020b92030b49766f727920436f617374&limit=50&apiKey=549757e660ae405c93a95c0ba18a27ee ")
  }
  getSupermarche(){
  return this.http.get("https://api.geoapify.com/v2/places?categories=commercial.supermarket&filter=place:512c9a7395934516c059318d70a47df51f40f00101f9010bf1020000000000c0020b92030b49766f727920436f617374&limit=50&apiKey=549757e660ae405c93a95c0ba18a27ee")
  }
  getLoisir(){
    return this.http.get("https://api.geoapify.com/v2/places?categories=leisure&filter=place:512c9a7395934516c059318d70a47df51f40f00101f9010bf1020000000000c0020b92030b49766f727920436f617374&limit=50&apiKey=549757e660ae405c93a95c0ba18a27ee")
  }
  getShopping(){
    return this.http.get("https://api.geoapify.com/v2/places?categories=commercial.clothing&filter=place:512c9a7395934516c059318d70a47df51f40f00101f9010bf1020000000000c0020b92030b49766f727920436f617374&limit=50&apiKey=549757e660ae405c93a95c0ba18a27ee ")
  }
  getRestaurant(){
    return this.http.get("https://api.geoapify.com/v2/places?categories=commercial.food_and_drink&filter=place:512c9a7395934516c059318d70a47df51f40f00101f9010bf1020000000000c0020b92030b49766f727920436f617374&limit=50&apiKey=549757e660ae405c93a95c0ba18a27ee")
  }
}
