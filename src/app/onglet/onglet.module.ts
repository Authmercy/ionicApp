import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OngletPageRoutingModule } from './onglet-routing.module';

import { OngletPage } from './onglet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OngletPageRoutingModule
  ],
  declarations: [OngletPage]
})
export class OngletPageModule {}
