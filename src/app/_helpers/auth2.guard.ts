import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { TokenServiceService } from '../_Services/token.service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth2Guard implements CanActivate {

  constructor(
    private router: Router,
    private tokenServices: TokenServiceService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const teste=this.tokenServices.islogin()

    if (teste) {
      return true
    }

    return this.router.navigate(['auth'])








    // const userIsAuthorized = /* Votre logique de vérification d'authentification ici */

    // if (userIsAuthorized) {
    //   return true; // L'utilisateur est autorisé
    // } else {
    //   // L'utilisateur n'est pas autorisé, rediriger vers la route 'auth'
    //   return this.router.createUrlTree(['/auth']);
    // }
  }
}