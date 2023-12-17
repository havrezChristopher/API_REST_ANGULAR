import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AAddComponent } from './a-add/a-add.component';
import { AEditComponent } from './a-edit/a-edit.component';
import { ADeleteComponent } from './a-delete/a-delete.component';
import { AIndexComponent } from './a-index/a-index.component';

const routes: Routes = [
  {path:'', component:AIndexComponent},
  {path:'add',component:AAddComponent},
  // utilisation du paterne (:id) pour passer ou recuperer par l url
  {path:'edit/:id',component:AEditComponent},
  {path:'delete/:id',component:ADeleteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
