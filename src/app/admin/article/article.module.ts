import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { AIndexComponent } from './a-index/a-index.component';
import { ADeleteComponent } from './a-delete/a-delete.component';


@NgModule({
  declarations: [
    AIndexComponent,
    ADeleteComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
