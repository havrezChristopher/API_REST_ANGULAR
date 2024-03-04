import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../_interface/user';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private API_URL = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }

  getAllUser(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/user`)
  }

  getUser(idUser: any): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/user/${idUser}`)
  }
  
  updateUser(idUser: any, user: any): Observable<any> {
    return this.http.patch<any>(`${this.API_URL}/user/${idUser}`, user);
  }
  
  addUser(userData: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/user`, userData);
  }
  


}

