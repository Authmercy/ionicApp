import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { AppComponent } from './app.component';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
const firebaseConfig = {
  apiKey: "AIzaSyD7YZmIbNf43yi2sFoJprkMWngp-lkyEIo",
  authDomain: "project-ionic-f4f64.firebaseapp.com",
  databaseURL: "https://project-ionic-f4f64-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "project-ionic-f4f64",
  storageBucket: "project-ionic-f4f64.appspot.com",
  messagingSenderId: "1009580206799",
  appId: "1:1009580206799:web:830858afadc3928448a5ba",
  measurementId: "G-R300NNW907"
}
@NgModule({
  declarations: [AppComponent],
  imports: [  AngularFireModule.initializeApp(firebaseConfig),HttpClientModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [ InAppBrowser,CallNumber, EmailComposer, Geolocation,
    NativeGeocoder,HttpClient,
   { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

