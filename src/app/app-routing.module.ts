import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './_utils/error/error.component';

const routes: Routes = [

  {
    //! ici en gros on utilise le leasyloading 
    //! pour dire que lorsque l'on est a la racine on charge le module du coter public 
    //! et de l activer grace a la promise ! 
    path : '', loadChildren : () => import('./public/public.module')
    .then (m => m.PublicModule)
  },

    {
      //! meme chose quand on arrive sur une route admin on charge le module  
      path:'admin',loadChildren:() => import ('./admin/admin.module')
      .then (m => m.AdminModule)
    },
    {
      path:'**',component:ErrorComponent
    }
];
//* Resumer du Routing  quand on arrive sur le public le router va brancher c'est route 
//* il va vérifier si depuis les route il y a une corespondance et va executer grace au promise  
//? Meme chose pour admin
///* et ici path:'**' est pour toute les route non brancher   

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
