import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/_Services/user.service.service';
// typer les observable
import { IUser } from 'src/app/_interface/user';

@Component({
  selector: 'app-u-edit',
  templateUrl: './u-edit.component.html',
  styleUrls: ['./u-edit.component.css']
})
export class UEditComponent implements OnInit {

  idUser!: any
  //  Adapter interface ...
  user:any = {
    idUser: 0,
    firstName: '',
    lastName: '',
    role: '',
    emailUser: '',
    password: '',
    updatedAt: '',
    createdAt: '',
    deletedAt: null,
  }
  
  constructor
    (
      private activated: ActivatedRoute,
      private userService: UserServiceService
    ) { }

ngOnInit(): void {
  let idUser = this.activated.snapshot.paramMap.get('idUser');
  console.log('Fucking id ====> ',idUser);

  if (idUser) {
    this.userService.getUser(idUser).subscribe(
      user => {
        console.log(user);
        this.user = user
      },
      error => console.error('Erreur lors de la récupération de l’utilisateur:', error)
    );
  } else {
    console.error('ID utilisateur est null');
  }
}


  onSubmit(): void {
    console.log(this.user)
  }
}