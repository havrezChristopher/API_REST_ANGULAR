import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../_Services/auth.service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';
import { TokenServiceService } from 'src/app/_Services/token.service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailUser!: string
  password!: string

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private TokenService: TokenServiceService

  ) { }


  Connection(loginForm: NgForm): void {
    if (loginForm.valid) {
      this.authService.signin(this.emailUser, this.password)
        .subscribe(response => {
          this.TokenService.saveToken(response.token)
          console.log(response.token);
          this.router.navigate(['admin']);


        });
    }

  }



}

