import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/_Services/auth.service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  signupForm!: FormGroup;
  loginError!: string;
  signupError!: string;
  signupSuccess!: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthServiceService
  ) { }
  ngOnInit(): void {
    // Initialisation du formulaire avec ses champs et validations.

    this.signupForm = this.formBuilder.group({
      lastName: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      emailUtilisateur: [null, [Validators.required, Validators.email]],
      hashedPassword: [null, [Validators.required, Validators.minLength(6)]],
      birthday: [null, [Validators.required]],
      role: ['', [Validators.minLength(0)]],
      genre: ['', [Validators.minLength(0)]],
      gsm: ['', [Validators.minLength(0)]],
    });
  }


    // // Méthode pour gérer l'inscription
    // signup(): void {
    //   // Vérifie si le formulaire est valide
    //   if (this.signupForm.valid) {
   
    //     // Appelle la méthode d'inscription d'AuthService et souscrit à la réponse
    //     this.authService.signup(this.signupForm.value).subscribe(response => {
    //         console.log('test', response);
  
    //         // En cas de succès, affiche un message et redirige vers login
    //         this.signupSuccess = 'Inscription réussie !';
    //         this.router.navigate(['/login']);
    //       },
          
    //     );
    //   }
    // }


}
