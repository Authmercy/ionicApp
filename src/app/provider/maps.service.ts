/// <reference path="../Microsoft.Maps.All.d.ts" />
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class MapsService {
  private map: Microsoft.Maps.Map | undefined;
  private mapInitializedCallback: (() => void) | undefined;

  constructor() {}

  getMap(): Microsoft.Maps.Map | undefined {
    return this.map;
  }

  initMap(elementId: string, apiKey: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const mapElement = document.getElementById(elementId);

      if (mapElement && Microsoft && Microsoft.Maps) {
        this.map = new Microsoft.Maps.Map(mapElement, {
          credentials: apiKey
        });

        // Charge le module des directions de façon asynchrone
        Microsoft.Maps.loadModule('Microsoft.Maps.Directions', () => {
          resolve();
        });
      } else {
        console.error('Erreur lors de l\'initialisation de la carte Bing Maps.');
        reject();
      }
    });
  }

  calculateRoute(start: { latitude: number, longitude: number }, end: { latitude: number, longitude: number }): void {
    if (this.map && Microsoft && Microsoft.Maps && Microsoft.Maps.Directions && Microsoft.Maps.Directions.DirectionsManager) {
      const directionsManager = new Microsoft.Maps.Directions.DirectionsManager(this.map);

      const waypoint1 = new Microsoft.Maps.Directions.Waypoint({
        location: new Microsoft.Maps.Location(start.latitude, start.longitude)
      });

      const waypoint2 = new Microsoft.Maps.Directions.Waypoint({
        location: new Microsoft.Maps.Location(end.latitude, end.longitude)
      });

      directionsManager.addWaypoint(waypoint1);
      directionsManager.addWaypoint(waypoint2);

      directionsManager.calculateDirections();
    } else {
      console.error('Erreur lors du calcul de l\'itinéraire : DirectionsManager non disponible.');
    }
  }


  

  centerMap(currentLocation: { latitude: number; longitude: number }): void {
    if (this.map) {
      this.map.setView({
        center: new Microsoft.Maps.Location(currentLocation.latitude, currentLocation.longitude),
        zoom: 15
      });
    } else {
      console.error('Erreur lors du centrage de la carte : carte non disponible.');
    }
  }
  AutourMap(AutorLocation: { latitude: number; longitude: number }): void {
    if (this.map) {
      this.map.setView({
        center: new Microsoft.Maps.Location(AutorLocation.latitude, AutorLocation.longitude),
        zoom: 15
      });
    } else {
      console.error('Erreur lors du centrage de la carte : carte non disponible.');
    }
  }


  async getPosition(): Promise<Microsoft.Maps.Location> {
    const position: GeolocationPosition = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(error)
      );
    });

    // Correction : Utiliser le constructeur correct pour créer un objet Location
    const location = new Microsoft.Maps.Location(position.coords.latitude, position.coords.longitude);
    return location;
  }

  async getAutour(): Promise<Microsoft.Maps.Location> {
    const position: GeolocationPosition = await new Promise((resolve, reject) => {
      navigator.geolocation.watchPosition(
        (position) => resolve(position),
        (error) => reject(error));
    });

    // Correction : Utiliser le constructeur correct pour créer un objet Location
    const location = new Microsoft.Maps.Location(position.coords.latitude, position.coords.longitude);
    return location;
  }
  addMarker(location: { latitude: number, longitude: number }, title: string): void {
    if (!this.map) {
      console.error('Map is not initialized');
      return;
    }
  
    const pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(location.latitude, location.longitude), { title });
    this.map.entities.push(pushpin);
  }
  addMarker2(location: { latitude: number, longitude: number }, title: string): void {
    if (!this.map) {
      console.error('Map is not initialized');
      return;
    }
  
    const pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(location.latitude, location.longitude), { title });
    this.map.entities.push(pushpin);
  }
  
  
  
}
