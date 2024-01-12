import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OngletsPage } from './onglets.page';

const routes: Routes = [
  {
    path: 'onglets',
    component: OngletsPage,
    children: [
      {
        path: 'accueil',
        loadChildren: () => import('../accueil/accueil.module').then( m => m.AccueilPageModule)
      },

      {
        path: 'accueil/category/',
        loadChildren: () => import('../category/category.module').then( m => m.CategoryPageModule)
      },
      {
        path: 'category-ci',
        loadChildren: () => import('../category-ci/category-ci.module').then( m => m.CategoryCIPageModule)
      },
      {
        path: 'category-sa',
        loadChildren: () => import('../category-sa/category-sa.module').then( m => m.CategorySAPageModule)
      },
      {
        path: 'category-nigeria',
        loadChildren: () => import('../category-nigeria/category-nigeria.module').then( m => m.CategoryNigeriaPageModule)
      },
      {
        path: 'onglets/apropos',
        loadChildren: () => import('../apropos/apropos.module').then( m => m.AproposPageModule)
      },
      {
        path: 'apropos',
        loadChildren: () => import('../apropos/apropos.module').then( m => m.AproposPageModule)
      },
      {
        path: 'onglets/acote',
        loadChildren: () => import('../acote/acote.module').then( m => m.AcotePageModule)
      },
      
      {
        path: 'acote',
        loadChildren: () => import('../acote/acote.module').then( m => m.AcotePageModule)
      },
      {
        path: 'list',
        loadChildren: () => import('../list/list.module').then( m => m.ListPageModule)
      },
   ]
  },
  {
    path: '',
    redirectTo: '/onglets/accueil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OngletsPageRoutingModule {}
