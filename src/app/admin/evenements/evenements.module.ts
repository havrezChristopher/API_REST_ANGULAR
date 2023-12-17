import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvenementsRoutingModule } from './evenements-routing.module';
import { EAddComponent } from './e-add/e-add.component';
import { EIndexComponent } from './e-index/e-index.component';
import { EEditComponent } from './e-edit/e-edit.component';
import { EDeleteComponent } from './e-delete/e-delete.component';


@NgModule({
  declarations: [
    EAddComponent,
    EIndexComponent,
    EEditComponent,
    EDeleteComponent
  ],
  imports: [
    CommonModule,
    EvenementsRoutingModule
  ]
})
export class EvenementsModule { }
