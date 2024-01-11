import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryNigeriaPage } from './category-nigeria.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryNigeriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryNigeriaPageRoutingModule {}
