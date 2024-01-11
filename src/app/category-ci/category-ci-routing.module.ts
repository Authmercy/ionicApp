import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryCIPage } from './category-ci.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryCIPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryCIPageRoutingModule {}
