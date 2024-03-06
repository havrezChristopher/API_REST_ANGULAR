import { Component ,ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Enregistrez le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('contactForm') contactForm: ElementRef<HTMLDivElement>={} as ElementRef<HTMLDivElement>;

  constructor() { 
    // Enregistrez le plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    // Utilisez gsap avec scrollTrigger pour animer votre élément
    gsap.from(this.contactForm.nativeElement, {
      scrollTrigger: {
        trigger: this.contactForm.nativeElement,
        start: 'top bottom', // L'animation commence lorsque le 'top' du trigger atteint le 'bottom' du viewport
        toggleActions: 'play none none none' // Actions à effectuer à l'entrée du viewport, pendant le défilement et à la sortie
      },
      x: 600, // déplace l'élément de 100 pixels à partir de la droite
      opacity: 0,
      duration: 2.5 // durée de l'animation en secondes
    });
  }
}