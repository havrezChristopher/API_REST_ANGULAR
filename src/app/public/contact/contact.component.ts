// import { MatDialog } from '@angular/material/dialog';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { ReCaptchaV3Service } from 'ng-recaptcha';
// import emailjs from '@emailjs/browser';
// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.css']
// })
// export class ContactComponent implements OnInit {
//   contactForm!: FormGroup; // Déclaration du FormGroup pour le formulaire
//   messageSent: boolean = false; // Flag pour vérifier si le message a été envoyé
//   user_name!: string; // Variable pour le nom d'utilisateur
//   user_email!: string; // Variable pour l'email de l'utilisateur
//   message!: string; // Variable pour le message

//   constructor(
//     private router: Router,
//     private popUp: MatDialog, // Service MatDialog pour les pop-ups
//     private formBuilder: FormBuilder, // FormBuilder pour construire le formulaire réactif
//     private recaptchaV3Service: ReCaptchaV3Service //! .....Integration recaptcha......
//   ) { }

//   ngOnInit(): void {
//     // Initialisation du formulaire avec des validateurs
//     this.contactForm = this.formBuilder.group({
//       user_name: ['', Validators.required],
//       lastName: ['', Validators.required],
//       user_email: ['', [Validators.required, Validators.email]],
//       message: ['', Validators.required],
//     });
//   }

//   onSubmit(): void {
//     // Méthode appelée lors de la soumission du formulaire OnSubmit
//     if (this.contactForm.valid) {
//       //! .....Integration recaptcha...... 
//       this.recaptchaV3Service.execute('importantAction')
//         .subscribe((token: string) => {
//           console.debug(`Token [${token}] generated`);
//           // en gros le recapcha envoie un token juste pour verifier si le nav du client c'est l enregistrer !
//           //! .....Integration recaptcha......
//           // Envoi du formulaire si toutes les validations sont passées
//           emailjs.sendForm('service_niz5vsh', 'template_7k1e3no', '#monID', 'LmI4E7tIotERZQZ-p')
//             .then((response: { status: any; text: any; }) => {
//               this.openDialog('Envoyer !', 'Votre message a bien été envoyé.');
//               console.log('Email successfully sent!', response.status, response.text);
//               this.messageSent = true
//               // Réinitialisation du formulaire c'est les bonne pratique 
//               this.contactForm.reset();
//               this.router.navigate(['/home'])
//             }, (err: any) => {

//               this.openDialog('erreur', err);
//             });
//         });
//     }
//   }

//   openDialog(title: string, message: string): void {
//     // Méthode pour ouvrir un pop-up avec un titre et un message
//     this.popUp.open(PopUpComponent, {
//       data: { title, message }
//     });
//   }

// }
