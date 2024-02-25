import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticleRoutingModule } from './article-routing.module';
import { AIndexComponent } from './a-index/a-index.component';
import { ADeleteComponent } from './a-delete/a-delete.component';
import { AEditComponent } from './a-edit/a-edit.component';
import { AAddComponent } from './a-add/a-add.component';


@NgModule({
  declarations: [
    AEditComponent,
    AAddComponent,
    AIndexComponent,
    ADeleteComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    FormsModule
  ]
})
export class ArticleModule { }
