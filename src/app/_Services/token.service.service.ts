import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

  constructor(
    private router: Router

  ) { }

  saveToken(token: string): void {
    localStorage.setItem('token', token)
  }
  clearToken(): void {
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }

  islogin(): boolean {
    const token = localStorage.getItem('token')
    return !!token
  }

}
