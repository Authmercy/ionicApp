import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../provider/authentification.service';
@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {
  constructor(public authService: AuthentificationService) {}
  ngOnInit() {}
}