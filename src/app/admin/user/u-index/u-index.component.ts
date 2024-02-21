import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/_Services/user.service.service';
import {IUser} from 'src/app/_interface/user'

@Component({
  selector: 'app-u-index',
  templateUrl: './u-index.component.html',
  styleUrls: ['./u-index.component.css']
})
export class UIndexComponent implements OnInit {

  userList: IUser[] = []

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(
      (user:any) => {
        console.log(user)    
        this.userList = user
    })
  }

}
