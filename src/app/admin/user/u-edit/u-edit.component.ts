import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/_Services/user.service.service';
// typer les observable
import { IUser } from 'src/app/_interface/user';
import { number } from 'yup';

@Component({
  selector: 'app-u-edit',
  templateUrl: './u-edit.component.html',
  styleUrls: ['./u-edit.component.css']
})
export class UEditComponent implements OnInit {

  // user: any= {

    
  //   lastName: '',
  //   firstName: '',
  //   emailUser: '',
  //   password: '',
  //   createdAt: '',
  //   updatedAt: '',
  //   deletedAt: '',

  // }

  idUser!:any
  constructor
    (
      private activated: ActivatedRoute,
      private userService: UserServiceService
    ) { }

  ngOnInit(): void {
    
    let idUser=this.activated.snapshot.paramMap.get('idUser')
    console.log(idUser);
    
    // Soucription au services activated et on ce branche au params de l url 
    this.userService.getUser(idUser).subscribe(
      // ici on récupérent et traite ce que l ont recoit (data)
      (data) => {
        console.log(data);
        // this.user =data.user

      }
    )
  }
  onSubmit ():void {
    console.log(this.idUser);
    
  }

}
