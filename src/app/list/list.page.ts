import { Component, NgZone, OnInit } from '@angular/core';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NavController } from '@ionic/angular';
import { MapsService } from 'src/app/provider/maps.service';
import { HttpClient } from '@angular/common/http'
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

 
  latitude: any = 0; //latitude
  longitude: any = 0; //longitude
  address: string;
  private currentPosition!: { latitude: number; longitude: number; };
  private AutorLocation!: { latitude: number; longitude: number; };

  constructor(private http: HttpClient,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    public mapsService: MapsService,private router: Router

  ) { }
  cat="map";
  pending: boolean = false;

  async ngOnInit() {
    
    this.getAutourdemoiList()
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


    
    // Calcul de l'itinéraire de la position actuelle à la destination
    this.calculateAndDisplayRoute();


  }
  liste:any[]=[]
  getMap(){

  }

  

  getList(){
    this.cat='list'
  }
  // geolocation options
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
 
  
  getAutourdemoiList() {
  
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
        this.http.get("https://api.geoapify.com/v2/places?categories=commercial.supermarket,commercial.clothing,commercial.food_and_drink,accommodation.hotel&filter=circle:" + this.longitude+ "," +  this.latitude + ",5000&bias=proximity:" +this.longitude + "," + this.latitude + "&limit=50&apiKey=549757e660ae405c93a95c0ba18a27ee")
          .subscribe((rep: any) => {
            console.log(rep)
         this.liste=rep.features
            this.pending =true
            console.log(rep.features)
            for (let index = 0; index < 50; index++) {
              console.log(rep.features[index].geometry.coordinates[1])
            const AutorLocation = rep.features[index].geometry.coordinates
            this.name = rep.features.categories
            this.listLat= rep.features[index].geometry.coordinates[1]
            this.listLong= rep.features[index].geometry.coordinates[0]
            this.name= rep.features[index].properties.name
            console.log(this.listLong,this.listLat)
            this.mapsService.centerMap(this.AutorLocation);
            this.mapsService.addMarker2(new Microsoft.Maps.Location(this.listLat,this.listLong ), this.name);
            }
          },
            (err) => {
              console.log(err);
            });


      })





  }
  plusdetails(hotels:any){
    localStorage.setItem("hotels",JSON.stringify(hotels));
    this.router.navigate(['details'])
  }
  
}
