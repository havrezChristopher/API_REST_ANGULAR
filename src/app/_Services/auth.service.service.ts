import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { CookieService } from 'ngx-cookie-service';
import { Observable, pipe, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  signin(emailUser: string, password: string): Observable<any> {
    const data = { emailUser, password }
    return this.http.post(`${this.API_URL}/auth/login`, data)
      .pipe(
        // si c'est bon on stock le token utilisateur dans le local storage
        // Si dans la response il y a un token 
        tap((response: any) => {

          if (response.token) {
            // ici on crée un objet 'authToken'et on mais la response.token dedant 
            this.cookieService.set('authToken', response.token)
            // et la notre cookie est set avec un token 
          }
        })


      );
  };
  // signup(emailUser: string, password: string): Observable<any> {
  //   const data = { emailUser, password };
  //   // ici on parametrer les headers de la requet pour etre sur que l on envoie ce que le bac attend 
  //   const headers =new HttpHeaders({
  //     'Content-Type ': 'application/json'
  //   });
  //   // ici on stock tout dans les variable et on stock tout dans la requetepour que ce soit moin long 
  //   const options ={headers:headers}
  //   // sa evite de mettre de la ligne 33 a la ligne 39 on mais dans des variable que l on mais dans la requete plus lisible
  //   return this.http.post(`${this.API_URL}/auth/register`,data,options)
  // }
}
