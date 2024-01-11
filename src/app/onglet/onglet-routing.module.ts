import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OngletPage } from './onglet.page';

const routes: Routes = [
  {
    path: 'onglet',
    component: OngletPage,
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
        path: 'apropos',
        loadChildren: () => import('../apropos/apropos.module').then( m => m.AproposPageModule)
      },
      
      {
        path: 'acote',
        loadChildren: () => import('../acote/acote.module').then( m => m.AcotePageModule)
      },
      {
        path: 'list',
        loadChildren: () => import('../list/list.module').then( m => m.ListPageModule)
      },
    {
      path: 'onglets',
      redirectTo: '/onglets/accueil',
      pathMatch: 'full'
    }]
  },
  {
    path: 'onglet',
    redirectTo: '/onglet/accueil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OngletPageRoutingModule {}
