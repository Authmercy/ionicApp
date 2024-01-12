import { Component, OnInit } from '@angular/core';
import { DatasaService } from '../provider/datasa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-sa',
  templateUrl: './category-sa.page.html',
  styleUrls: ['./category-sa.page.scss'],
})
export class CategorySAPage implements OnInit {

  listLoisir: any[] = [];
  public loaded = false;
  id:any
  cat="hotel";
  pending: boolean = false;
  listhotel: any[] = [];
  listRestaurant: any[] = [];
  listSupermarche: any[] = []
  constructor(private dataService: DatasaService,private router: Router) { }

  ngOnInit() {

    if(this.id==1){
      this.id =1
      this.getHotel();
    
    }
    this.getHotel();
    this.getSupermarche()
    this.getLoisir()
    this.getResto()
    setTimeout(() => {
      this.loadData();
    }, 5000);
  }
 

  loadData() {
    this.dataService.getHotels().subscribe(
      (rep: any) => {
        console.log(rep);
        this.listhotel = rep.features;
        console.log(rep.features);
        this.pending = true;
        this.loaded = true; // Indique que les données ont été chargées
      },
      (err) => {
        console.log(err);
      }
    );
}
hotel(){
  this.cat='hotel'
}
Restaurant(){
  this.cat='restaurant'
}
marche(){
  this.cat='supermarche'
}
loisir(){
  this.cat='loisir'
}

 
 getHotel() {
  this.cat='hotel'
  this.dataService.getHotels().subscribe(
    (rep: any) => {
      console.log(rep);
      this.listhotel = rep.features;
      console.log(rep.features);
      this.pending = true;
      this.loaded = true; // Indique que les données ont été chargées
    },
    (err) => {
      console.log(err);
    }
  );
}
getResto(){
  this.cat='restaurant'
  this.dataService.getRestaurant().subscribe(
    (rep: any) => {
      console.log(rep);
      this.listRestaurant = rep.features;
      console.log(rep.features);
      this.pending = true;
      this.loaded = true;
    },
    (err) => {
      console.log(err);
    }
  );
}




getLoisir(){
  this.cat='loisir'
  this.dataService.getLoisir().subscribe((rep: any) => {
    console.log(rep);
    this.listLoisir = rep.features;;
    this.pending = true;
    this.loaded = true;

  },
    (err) => {
      console.log(err);
    });
}

getSupermarche(){
  this.cat='shop'
  this.dataService.getSupermarche().subscribe((rep: any) => {
    console.log(rep);
    this.listSupermarche = rep.features;
    this.pending = true;
    this.loaded = true;

  },
  (err) => {
    console.log(err);
  });
}



plusdetails(hotels:any){
  localStorage.setItem("hotels",JSON.stringify(hotels));
  this.router.navigate(['details'])
}
listRestaurantcameroun :any
listHotelcameroun:any
listShopcameroun: any
listLoisircameroun:any
resultats:any
search(event: any) {
      
  if (this.cat = "restaurant"){
    let val = event.target.value; //on récupère la saisie de l’utilisateur
    this.listRestaurantcameroun = this.resultats.filter((item: any) => {
    let txtNom = item.properties.name;
    return txtNom.toLowerCase().indexOf(val.toLowerCase()) > -1
    });
  }

  if (this.cat = "hotel"){
    let val = event.target.value; //on récupère la saisie de l’utilisateur
    this.listHotelcameroun = this.resultats.filter((item: any) => {
    let txtNom = item.properties.name;
    return txtNom.toLowerCase().indexOf(val.toLowerCase()) > -1
    });
  }
  if (this.cat = "shop"){
    let val = event.target.value; //on récupère la saisie de l’utilisateur
    this.listShopcameroun = this.resultats.filter((item: any) => {
    let txtNom = item.properties.name;
    return txtNom.toLowerCase().indexOf(val.toLowerCase()) > -1
    });
  }

  if (this.cat = "loisir"){
    let val = event.target.value; //on récupère la saisie de l’utilisateur
    this.listLoisircameroun = this.resultats.filter((item: any) => {
    let txtNom = item.properties.name;
    return txtNom.toLowerCase().indexOf(val.toLowerCase()) > -1
    });
  }
}
}