import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-barre-playout',
  templateUrl: './nav-barre-playout.component.html',
  styleUrls: ['./nav-barre-playout.component.css']
})
export class NavBarrePlayoutComponent {
  isLoggedIn = false;




  logout() {
    // this.authService.logout();
  }
}
