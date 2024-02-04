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
  lastname!:string
  user!:any 
  
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

    this.activated.params.subscribe(params => {
      this.idUser = params['id']
      this.idUser = parseInt(this.idUser)
      console.log('Fuck==============',this.idUser);
      
    })
    this.userService.getUser(this.idUser).subscribe(
      (userDetails) => {
        this.lastname = userDetails.firstName

      }
    )
  }

  onSubmit(): void {
    // console.log(this.idUser);
    console.log(this.user);
  }
}
