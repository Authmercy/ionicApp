import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

import { EmailComposer } from '@ionic-native/email-composer/ngx';
// import { SMTPClient } from 'emailjs';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NavController } from '@ionic/angular';
import { MapsService } from 'src/app/provider/maps.service';
import { HttpClient } from '@angular/common/http'

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  [x: string]: any;
  listhotel: any[] = [];
  places :any;
  constructor(  private geolocation: Geolocation,private http: HttpClient,
    private nativeGeocoder: NativeGeocoder,
    public mapsService: MapsService,
private callNumber: CallNumber,private emailComposer: EmailComposer,private inAppBrowser: InAppBrowser) { }
  async ngOnInit() {
    this.mapsService.initMap('bingMap', 'Apw2frPNDQwenaJt-Qwt5nDdvYBw_wtG0r6PVoFydMmn_o4uMNjCN_4UMzJZow0w');

    // Récupère la position actuelle
    this.currentPosition = await this.mapsService.getPosition();
    this.AutorLocation = await this.mapsService.getAutour();

    // Centre la carte sur la position actuelle
    this.mapsService.centerMap(this.currentPosition);
    this.mapsService.AutourMap(this.AutorLocation);

    // Ajoute un marqueur à la position actuelle
    this.mapsService.addMarker(this.currentPosition, 'Ma position');

    this.getAutourdemoi()
    let hotels=localStorage.getItem("hotels");
    if(hotels) {
      this.places = JSON.parse(hotels);
    }
  }
  appel() { 
    this.callNumber.callNumber('this.places.datasource.raw.contact:phone', true) .then(res =>
    { console.log('Launched dialer!', res)
    }) .catch(err => {
    console.log('Error launching dialer'
    , err)
    });
  }
 mail() {
    
    const email = {
      to: 'this.places.datasource.raw.contact:email',
      subject: 'Sujet de l\'e-mail',
      body: 'Message',
      isHtml: true,
    };
  
    this.emailComposer.open(email);
  }
  latitude: any = 0; //latitude
  longitude: any = 0; //longitude
  address: string;
  private currentPosition!: { latitude: number; longitude: number; };
  private AutorLocation!: { latitude: number; longitude: number; };

  
 
  getCurrentCoordinates() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        console.log(resp);
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        this.getAddress(this.latitude, this.longitude);
        const currentLocation = {
          latitude: resp.coords.latitude,
          longitude: resp.coords.longitude
        };
        console.log("Get location")

        this.mapsService.centerMap(currentLocation);
        this.mapsService.addMarker(new Microsoft.Maps.Location(currentLocation.latitude, currentLocation.longitude), 'Ma Position');

      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
    }

    nativeGeocoderOptions: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5,
    }; 
    getAddress(lat: any, long: any) {
      this.nativeGeocoder
        .reverseGeocode(lat, long, this.nativeGeocoderOptions)
        .then((res: NativeGeocoderResult[]) => {
          this.address = this.pretifyAddress(res[0]);
          console.log("Get Adress")
        })
        .catch((error: any) => {
          alert('Error getting location' + JSON.stringify(error));
        });
    }
    // address
    pretifyAddress(address: any) {
      let obj = [];
      let data = '';
      for (let key in address) {
        obj.push(address[key]);
      }
      obj.reverse();
      for (let val in obj) {
        if (obj[val].length) data += obj[val] + ', ';
      }
      return address.slice(0, -2);

    }

  listLat: any[] = []
  listLong: any[] = []
  name: any
  private map: Microsoft.Maps.Map 
  getMap(): Microsoft.Maps.Map | undefined {
    return this.map;
  }

  getAutourdemoi() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        console.log(resp);
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        this.getAddress(this.latitude, this.longitude);
        const currentLocation = {
          latitude: resp.coords.latitude,
          longitude: resp.coords.longitude
        };
        console.log(currentLocation)
       
          
            this.listLat = this.places.feature.geometry.coordinates[1]
            this.listLong = this.places.features.geometry.coordinates[0]
            
            const AutorLocation =this.places.features.geometry.coordinates
            this.mapsService.centerMap(this.AutorLocation);
            this.mapsService.addMarker2(new Microsoft.Maps.Location(this.listLat, this.listLong), this.name);
            console.log(AutorLocation)

            const directionsManager = new  Microsoft.Maps.Directions.DirectionsManager(this.map);
            const waypoint1 = new Microsoft.Maps.Directions.Waypoint(this.latitude);
            const waypoint2 = new Microsoft.Maps.Directions.Waypoint(this.latitude);

            directionsManager.calculateDirections();
            directionsManager.addWaypoint(waypoint1,0);
            directionsManager.addWaypoint(waypoint2,1);
      
            directionsManager.calculateDirections();
          
       

      })
     




 
}
}