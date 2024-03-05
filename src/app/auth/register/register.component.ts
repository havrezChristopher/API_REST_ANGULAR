import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName!: ''
  lastName!: ''
  emailUser!: ''

  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  get nameControl() {
    return this.form.controls['name'];
  }

  ngOnInit(): void {

    this.form = this.fb.group({
      'name': ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)], []],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required]],
      'gender': ['', [Validators.required]],
    });


    console.log(this.form.controls);
    console.log(this.form.controls['name']);



  }
  // ici le ngForm est le tipe par default du template Form 
  // saveData(registerForm : NgForm){
  //   console.log(registerForm.form);
  //   // ici json.stringify on convertis les valeur pour pouvoir les afficher 
  //   console.log('Valeurs : ',JSON.stringify(registerForm.value));
  //   console.log('user =>');


}

