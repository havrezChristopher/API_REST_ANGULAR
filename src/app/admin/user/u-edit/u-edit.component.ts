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
    // role: '',
    emailUser: '',
    // password: '',
    // updatedAt: '',
    // createdAt: '',
    // deletedAt: null,
  }
  
  constructor
    (
      private activatedRoute: ActivatedRoute,
      private userService: UserServiceService
    ) { }

    ngOnInit(): void {
      const idUser = this.activatedRoute.snapshot.paramMap.get('idUser');
      if (idUser) {
        this.userService.getUser(idUser).subscribe({
          next: (user: IUser) => {
            this.user = user;
            this.idUser = user.idUser.toString(); // Assurez-vous de convertir correctement selon le type attendu
          },
          error: (error) => console.error('Erreur lors de la récupération de l’utilisateur:', error)
        });
      } else {
        console.error('ID utilisateur est null');
      }
    }
  // Envoie des information du formulaire !
    updateUser(): void {
      this.userService.updateUser(this.idUser, this.user).subscribe({
        
        
        next: (response) => console.log('Mise à jour réussie', response),
        error: (error) => console.error('Erreur lors de la mise à jour de l’utilisateur:', error)
      });
    }
    
    onSubmit(): void {
      this.updateUser();
    }
}