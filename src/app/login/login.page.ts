import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthentificationService } from '../provider/authentification.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    public authService: AuthentificationService,
    public router: Router
  ) {}
  ngOnInit() {}
  logIn(email: any, password: any) {
    this.authService
      .SignIn(email.value, password.value)
      .then((): any => {
        if (this.authService.isEmailVerified) {
          this.router.navigate(['acotedemoi']);
        } else {
          window.alert('le mail nest pas verifié');
          return false;
        }
      })
      .catch((error: { message: any; }) => {
        window.alert(error.message);
      });
  }
  gotosignup(){
    this.router.navigate(['onglet/accueil'])
  }
}
