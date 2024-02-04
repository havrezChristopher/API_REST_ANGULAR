import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/_Services/user.service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // ajouter d autre params du token 
  idUser!: any

  constructor
    (
      private userService: UserServiceService,
      private activated: ActivatedRoute
    ) { }


  ngOnInit(): void {

    this.activated.params.subscribe(params => {
      this.idUser = params['idUser']
      console.log(this.idUser);


      this.userService.getUser(this.idUser).subscribe(

        (userDetails) => {
          this.idUser = userDetails.idUser
        },
        (error) => {
          console.error('erreur récuperation idUser', error)
        }


      )

    })

  }

}
