import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryNigeriaPageRoutingModule } from './category-nigeria-routing.module';

import { CategoryNigeriaPage } from './category-nigeria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryNigeriaPageRoutingModule
  ],
  declarations: [CategoryNigeriaPage]
})
export class CategoryNigeriaPageModule {}
