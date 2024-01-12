import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OngletsPageRoutingModule } from './onglets-routing.module';

import { OngletsPage } from './onglets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OngletsPageRoutingModule
  ],
  declarations: [OngletsPage]
})
export class OngletsPageModule {}
