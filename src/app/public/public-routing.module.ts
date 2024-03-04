import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { EvenementsComponent } from './evenements/evenements.component'
import { PlayoutComponent } from './playout/playout.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [

  {
    //* ici le playout pour dire qu'il y a des route enfant 
    //* et il sera le composant global de la partie public  
    path: '', component: PlayoutComponent, children: [
      //! redirection depuis nottre espace publique vers le route principal 
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'article', component: ArticleComponent },
      { path: 'evenements', component: EvenementsComponent },
      { path: 'contact', component: ContactComponent },

    ]
  }





];

@NgModule({
  //! Ne pas oublier de spécifier le forchild
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
