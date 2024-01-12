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
  
  latitude: any = 0; //latitude
  longitude: any = 0; //longitude
  address: string;
  private currentPosition!: { latitude: number; longitude: number; };
  private AutorLocation!: { latitude: number; longitude: number; };

  constructor(  private geolocation: Geolocation,private http: HttpClient,
    private nativeGeocoder: NativeGeocoder,
    public mapsService: MapsService,
private callNumber: CallNumber,private emailComposer: EmailComposer,private inAppBrowser: InAppBrowser) { }
  async ngOnInit() {
 
    let hotels=localStorage.getItem("hotels");
    if(hotels) {
      this.places = JSON.parse(hotels);
    }

      
    this.mapsService.initMap('bingMap', 'Apw2frPNDQwenaJt-Qwt5nDdvYBw_wtG0r6PVoFydMmn_o4uMNjCN_4UMzJZow0w');

    // Récupère la position actuelle
    this.currentPosition = await this.mapsService.getPosition();
    this.AutorLocation = await this.mapsService.getAutour();

    // Centre la carte sur la position actuelle
    this.mapsService.centerMap(this.currentPosition);
    this.mapsService.AutourMap(this.AutorLocation);

    // Ajoute un marqueur à la position actuelle
    this.mapsService.addMarker(this.currentPosition, 'Ma position');
    this.mapsService.addMarker2(this.AutorLocation, 'AutorLocation');
    this.getAutourdemoi()


    // Calcul de l'itinéraire de la position actuelle à la destination
    this.calculateAndDisplayRoute();


  }
  number: number
  appel() { 
   
    console.log(this.number)
    this.callNumber.callNumber('this.places.properties.datasource.raw.phone', true) .then(res =>
    { console.log('Launched dialer!', res)
    }) .catch(err => {
    console.log('Error launching dialer'
    , err)
    });
  }
 mail() {
    
    const email = {
      to: 'this.places.properties.datasource.raw.email',
      subject: 'Sujet de l\'e-mail',
      body: 'Message',
      isHtml: true,
    };
  
    this.emailComposer.open(email);
  }



  openWebsite() {
    const websiteUrl = 'this.places.properties.datasource.raw.email'; 
    const options = '_blank'; // '_blank' opens in the InAppBrowser, '_system' opens in the system browser
  
    const browser = this.inAppBrowser.create(websiteUrl, options);
  }
 
  options = {
    timeout: 10000,
    enableHighAccuracy: true,
    maximumAge: 3600,
  };
  // use geolocation to get user's device coordinates
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

  calculateAndDisplayRoute(): void {
    const map = this.mapsService.getMap();

    if (map && Microsoft.Maps.Directions && Microsoft.Maps.Directions.DirectionsManager) {
      const directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);

      const waypoint1 = new Microsoft.Maps.Directions.Waypoint({
        location: new Microsoft.Maps.Location(this.currentPosition.latitude, this.currentPosition.longitude)
      });

      const waypoint2 = new Microsoft.Maps.Directions.Waypoint({
        location: new Microsoft.Maps.Location(40.7128, -74.0060)
      });

      directionsManager.addWaypoint(waypoint1);
      directionsManager.addWaypoint(waypoint2);

      directionsManager.calculateDirections();
    } else {
      console.error('Erreur lors du calcul de \'itinéraire : DirectionsManager non disponible.');
    }
  }

  // geocoder options
  nativeGeocoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5,
  };
  // get address using coordinates
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
       
    
        let hotels=localStorage.getItem("hotels");
        if(hotels) {
          this.places = JSON.parse(hotels);
        }
            console.log( this.places.features)
          
              console.log(this.places.geometry.coordinates[1])
            const AutorLocation = this.places.geometry.coordinates
            this.name = this.places.categories
            this.listLat= this.places.geometry.coordinates[1]
            this.listLong= this.places.geometry.coordinates[0]
            this.name= this.places.properties.name
            console.log(this.listLong,this.listLat)
            this.mapsService.centerMap(this.AutorLocation);
            this.mapsService.addMarker2(new Microsoft.Maps.Location(this.listLat,this.listLong ), this.name);
            })}



    





  
  
  
}
