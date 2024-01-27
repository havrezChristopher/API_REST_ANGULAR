import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

  constructor() { }

  saveToken(token :string) :void {
    localStorage.setItem('token',token)
  }

  islogin():boolean{
    const token =localStorage.getItem('token')
    return !! token
  }

}
