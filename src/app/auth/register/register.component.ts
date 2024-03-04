import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Nouvelles instance de User 
public user : User = new User()


constructor (){


}

  ngOnInit(): void {
    
  }
    // ici le ngForm est le tipe par default du template Form 
    saveData(registerForm : NgForm){
      console.log(registerForm.form);
      // ici json.stringify on convertis les valeur pour pouvoir les afficher 
      console.log('Valeurs : ',JSON.stringify(registerForm.value));
      console.log('user =>');

      
    }
}
