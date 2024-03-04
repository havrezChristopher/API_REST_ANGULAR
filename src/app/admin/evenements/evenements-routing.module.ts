import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EIndexComponent } from './e-index/e-index.component';
import { EAddComponent } from './e-add/e-add.component';
import { EEditComponent } from './e-edit/e-edit.component';
import { EDeleteComponent } from './e-delete/e-delete.component';

const routes: Routes = [
  {path:'', component:EIndexComponent},
  {path:'add',component:EAddComponent},
  {path:'edit/:id',component:EEditComponent},
  {path:'delete/:id',component:EDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvenementsRoutingModule { }
