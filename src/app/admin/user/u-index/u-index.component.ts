import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/_Services/user.service.service';

@Component({
  selector: 'app-u-index',
  templateUrl: './u-index.component.html',
  styleUrls: ['./u-index.component.css']
})
export class UIndexComponent implements OnInit {

  userList : any[] = []


  constructor(
    private userService:UserServiceService
  ) { }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(
      ( user :any) => {
        console.log(user);
         this.userList = user
        
      }
    )

  }

}
