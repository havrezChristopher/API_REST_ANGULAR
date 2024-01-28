import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { TokenServiceService } from '../_Services/token.service.service';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenServiceService

  ) { }
  // Mise en place d un interceptor 
  // permet de donner un services au provider qui lui meme permet apres de faire des injection
  // linterceptor doit tout le temps etre actif
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.tokenService.getToken()
    // SI token à insérer dans le header
    // if (token !== null) {
    //   let clone = request.clone({
    //     headers: request.headers.set('authorization', 'bearer ' + token)
    //   })
    //   console.log(clone)
    //   return next.handle(clone)
    //     .pipe(
    //       catchError(error => {
    //         console.log(error)

    //         if (error.status === 401) {
    //           this.tokenService.clearTokenExpired()

    //         }
    //       }))
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    
    // Renvoie la requet apres interceptor
    return next.handle(request);
  }

    // Le mettre dans l app.module (Provider) pour lui dire de travailler tout le temps 

  }
  export const TokenInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    // La classe utiliser
    useClass: TokenInterceptorInterceptor,
    // disponible partout 
    multi: true

  }
