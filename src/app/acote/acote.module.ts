import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcotePageRoutingModule } from './acote-routing.module';

import { AcotePage } from './acote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcotePageRoutingModule
  ],
  declarations: [AcotePage]
})
export class AcotePageModule {}
