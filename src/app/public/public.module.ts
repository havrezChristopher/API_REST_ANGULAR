import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { ArticleComponent } from './article/article.component';
import { PublicRoutingModule } from './public-routing.module';




@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    EvenementsComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
    

  ]
})
export class PublicModule { }
