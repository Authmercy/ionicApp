import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { IonicSlides,NavController } from '@ionic/angular';
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {

  constructor() { }
  swiperModules = [IonicSlides];
  images = [
    {src: 'assets/images/funn.jpg'},
    {src: 'assets/images/hilton.jpg'},
    {src: 'assets/images/peroquet.jpg'},
    {src: 'assets/images/shopp.jpg'}
  ];

  ngOnInit() {
  }

}
