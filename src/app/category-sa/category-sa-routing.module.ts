import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategorySAPage } from './category-sa.page';

const routes: Routes = [
  {
    path: '',
    component: CategorySAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategorySAPageRoutingModule {}
