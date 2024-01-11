import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategorySAPageRoutingModule } from './category-sa-routing.module';

import { CategorySAPage } from './category-sa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategorySAPageRoutingModule
  ],
  declarations: [CategorySAPage]
})
export class CategorySAPageModule {}
