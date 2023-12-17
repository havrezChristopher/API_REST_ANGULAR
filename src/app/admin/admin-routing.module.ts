import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      //! redirection quand on arrive ici sur /admin  
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },

      {
        //! Admin/user quand on arrive sur cette route on charge le module et on l active 
        path: 'user', loadChildren: () => import('./user/user.module')
          .then(m => m.UserModule)
      },

      {
        path: 'article', loadChildren: () => import('./article/article.module')
          .then(m => m.ArticleModule)
      },
      {
        path: 'evenements', loadChildren: () => import('./evenements/evenements.module')
          .then(m => m.EvenementsModule)
      },



    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
