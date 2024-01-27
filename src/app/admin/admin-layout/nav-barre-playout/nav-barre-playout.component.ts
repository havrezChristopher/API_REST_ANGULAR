import { Component, OnInit } from '@angular/core';
import { TokenServiceService } from 'src/app/_Services/token.service.service';

@Component({
  selector: 'app-nav-barre-playout',
  templateUrl: './nav-barre-playout.component.html',
  styleUrls: ['./nav-barre-playout.component.css']
})
export class NavBarrePlayoutComponent implements OnInit {

  constructor(
    private tokenService: TokenServiceService

  ) { }

  ngOnInit(): void {

  }

  logout(): void {
    this.tokenService.clearToken()
  }
}
