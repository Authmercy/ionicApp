import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient,) { }

  getHotels(){
   return this.http.get("https://api.geoapify.com/v2/places?categories=accommodation.hotel&filter=place:51408fac57ec0a2740598e45894caff30e40f00101f90175e7290000000000c00208&limit=50&apiKey=549757e660ae405c93a95c0ba18a27ee")
  }
  getSupermarche(){
  return this.http.get("https://api.geoapify.com/v2/places?categories=commercial.supermarket&filter=place:51408fac57ec0a2740598e45894caff30e40f00101f90175e7290000000000c00208&limit=50&apiKey=549757e660ae405c93a95c0ba18a27ee")
  }
  getLoisir(){
    return this.http.get("https://api.geoapify.com/v2/places?categories=leisure&filter=place:51408fac57ec0a2740598e45894caff30e40f00101f90175e7290000000000c00208&limit=20&apiKey=549757e660ae405c93a95c0ba18a27ee")
  }
  getShopping(){
    return this.http.get("https://api.geoapify.com/v2/places?categories=commercial.clothing&filter=place:51200fc69838102740591034e0f9698c0e40f00101f9017ae7290000000000c0020692030b59616f756e64c3a9204956&limit=50&apiKey=549757e660ae405c93a95c0ba18a27ee")
  }
  getRestaurant(){
    return this.http.get("https://api.geoapify.com/v2/places?categories=commercial.food_and_drink&filter=place:51408fac57ec0a2740598e45894caff30e40f00101f90175e7290000000000c00208&limit=50&apiKey=549757e660ae405c93a95c0ba18a27ee")
  }
}
