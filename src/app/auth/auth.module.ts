import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import { RegisterComponent } from './register/register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    
    // RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AuthModule { }
