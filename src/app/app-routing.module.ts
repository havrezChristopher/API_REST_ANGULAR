import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    //! ici en gros on utilise le leasyloading 
    //! pour dire que lorsque l'on est a la racine on charge le module du coter public 
    //! et de l activer grace a la promise ! 
    path : '', loadChildren : () => import('./public/public.module')
    .then (m => m.PublicModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
