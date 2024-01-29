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

  idUser: number | null = null;
  user: IUser | null = null;
  constructor
    (
      private activated: ActivatedRoute,
      private userService: UserServiceService
    ) { }

  // ngOnInit(): void {
    
  //   let idUser=this.activated.snapshot.paramMap.get('idUser')
  //   console.log('Params',idUser);
    
  //   // Soucription au services activated et on ce branche au params de l url 
  //   this.userService.getUser(idUser).subscribe(
  //     // ici on récupérent et traite ce que l ont recoit (data)
  //     data => {
  //       console.log('Response du data ',data);
  //       this.user =data.idUser

  //     }
  //     )
  //   }
  
  // onSubmit():void{
  //   console.log(this.user);
    
  // }
  ngOnInit(): void {
    this.activated.paramMap.subscribe(params => {
      const idUserString = params.get('idUser');
      if (idUserString) {
        const idUser = parseInt(idUserString, 10);
        this.userService.getUser(idUser).subscribe(data => {
          console.log(data);
          this.user = data;
        });
      }
    });
  }

  onSubmit(): void {
    // console.log(this.idUser);
    console.log(this.user);
  }
}
