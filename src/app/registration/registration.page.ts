import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../provider/authentification.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  constructor(
    public authService: AuthentificationService,
    public router: Router
  ) {}
  ngOnInit() {
  }
  signUp(email: { value: any; }, password: { value: any; }){
    this.authService.RegisterUser(email.value, password.value)
    .then((res) => {
      // Do something here
      this.authService.SendVerificationMail()
      this.router.navigate(['verify-email']);
    }).catch((error) => {
      window.alert(error.message)
    })
}


}
