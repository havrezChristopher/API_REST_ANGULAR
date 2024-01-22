import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth.service.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailUser!: string 
  password!: string 

constructor(
  private authService : AuthServiceService,

  ){}
  

  Connection(loginForm : NgForm) :void {
    if (loginForm.valid) {
      this.authService.signin(this.emailUser,this.password)
      .subscribe(response =>{
    
    console.log('Response de request ===>',response.token);
    
    });
    }

  }



}

