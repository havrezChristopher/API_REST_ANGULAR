// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { NgZone } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class KonamiCodeService {
//   private konamiCode: string[] = ['KeyD', 'KeyU', 'KeyX', 'KeyP', 'KeyO', 'KeyK'];
//   private currentSequence: string[] = [];

//   constructor(private router: Router) {}

//   listenKonamiCode(): void {
//     window.addEventListener('keydown', (event: KeyboardEvent) => {
//       console.log(event.code);
//       // Ajoute la touche pressée à la séquence actuelle
//       this.currentSequence.push(event.code);
//       console.log(this.currentSequence);

//       // Si la séquence actuelle ne correspond pas à la séquence du Konami Code
//       if (!this.konamiCode.every((code, index) => code === this.currentSequence[index])) {
//         // Réinitialise la séquence actuelle
//         this.currentSequence = [];
//       }

//       // Si la séquence complète a été entrée
//       if (this.currentSequence.length === this.konamiCode.length) {
//         // Effectuer l'action, par exemple naviguer vers la route d'administration
//         this.router.navigate(['/evenements']);
//       }
//     });
//   }
// }
