import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DatasaService {

  constructor(private http:HttpClient,) { }

  getHotels(){
   return this.http.get("https://api.geoapify.com/v2/places?categories=accommodation.hotel&filter=place:512a70b20ddcfd3840594c24873e0ed13cc0f00101f9010d56010000000000c0020b92030c536f75746820416672696361&limit=50&apiKey=549757e660ae405c93a95c0ba18a27ee")
  }
  getSupermarche(){
  return this.http.get("https://api.geoapify.com/v2/places?categories=commercial.supermarket&filter=place:512a70b20ddcfd3840594c24873e0ed13cc0f00101f9010d56010000000000c0020b92030c536f75746820416672696361&limit=50&apiKey=549757e660ae405c93a95c0ba18a27ee")
  }
  getLoisir(){
    return this.http.get("https://api.geoapify.com/v2/places?categories=leisure&filter=place:512a70b20ddcfd3840594c24873e0ed13cc0f00101f9010d56010000000000c0020b92030c536f75746820416672696361&limit=50&apiKey=549757e660ae405c93a95c0ba18a27ee")
  }
  getShopping(){
    return this.http.get("https://api.geoapify.com/v2/places?categories=commercial.clothing&filter=place:512a70b20ddcfd3840594c24873e0ed13cc0f00101f9010d56010000000000c0020b92030c536f75746820416672696361&limit=50&apiKey=549757e660ae405c93a95c0ba18a27ee")
  }
  getRestaurant(){
    return this.http.get("https://api.geoapify.com/v2/places?categories=commercial.food_and_drink&filter=place:512a70b20ddcfd3840594c24873e0ed13cc0f00101f9010d56010000000000c0020b92030c536f75746820416672696361&limit=50&apiKey=549757e660ae405c93a95c0ba18a27ee")
  }
}
