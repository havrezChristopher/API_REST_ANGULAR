import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { NavBarrePlayoutComponent } from './admin-layout/nav-barre-playout/nav-barre-playout.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
    SidemenuComponent,
    NavBarrePlayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
