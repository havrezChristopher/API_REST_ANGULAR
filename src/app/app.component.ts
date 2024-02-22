import { Component, OnInit } from '@angular/core';
import { ApiErrorService } from './_Subject/api-error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular-Public-Admin';
  message = ''

constructor(private apiErrorServices:ApiErrorService){}


  ngOnInit(): void {
    this.apiErrorServices.apiError.subscribe(data => {
      this.message = data;
      
    })
  }
  clearMessage (){
    this.message=''
  }
}
