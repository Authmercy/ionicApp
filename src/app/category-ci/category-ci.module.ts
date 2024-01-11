import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryCIPageRoutingModule } from './category-ci-routing.module';

import { CategoryCIPage } from './category-ci.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryCIPageRoutingModule
  ],
  declarations: [CategoryCIPage]
})
export class CategoryCIPageModule {}
