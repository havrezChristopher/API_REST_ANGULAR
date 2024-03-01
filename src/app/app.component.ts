import { Component, OnInit } from '@angular/core';
import { ApiErrorService } from './_Subject/api-error.service';
// import { KonamiCodeService } from './_Secret/konami-code.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular-Public-Admin';
  message = ''
  display = false

constructor(
  private apiErrorServices:ApiErrorService,
  // private konamiCodeService: KonamiCodeService
  
  ){}


  ngOnInit(): void {
    // this.konamiCodeService.listenKonamiCode();
    this.apiErrorServices.apiError.subscribe(
      data => {
      this.message = data;
      this.display = true
      
    })
  }
  clearMessage (){
    this.message=''
    this.display = false
  }
}
