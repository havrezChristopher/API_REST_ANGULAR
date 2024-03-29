import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';

import { PublicRoutingModule } from './public-routing.module';
import { PlayoutComponent } from './playout/playout.component';
import { NavBarrePlayoutComponent } from './playout/nav-barre-playout/nav-barre-playout.component';
import { FooterPlayoutComponent } from './playout/footer-playout/footer-playout.component';
//! #################################### Matherial ###################################################
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
//! #################################### Matherial ###################################################



@NgModule({
  declarations: [
    HomeComponent,
    EvenementsComponent,
    ArticleComponent,
    PlayoutComponent,
    NavBarrePlayoutComponent,
    FooterPlayoutComponent,
    RegisterComponent,
    ContactComponent
    
    
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatIconModule,
    MatMenuModule,
    
    
    
    
    

  ]
})
export class PublicModule { }
