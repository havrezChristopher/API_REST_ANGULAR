import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  private API_URL=environment.API_URL

  constructor(private http:HttpClient) { }

    getAllArticle() : Observable<any>{
      return this.http.get<any>(`${this.API_URL}/article`)

    }
    getArticle(idArticle: any): Observable<any> {
      return this.http.get<any>(`${this.API_URL}/article/${idArticle}`)
    }
    addArticle(ArticleData: any): Observable<any> {
      return this.http.put<any>(`${this.API_URL}/article`, ArticleData);
    }
    updateArticle(idArticle: any, ArticleData: any): Observable<any> {
      return this.http.patch<any>(`${this.API_URL}/article/${idArticle}`, ArticleData);
    }
    trashArticle(){

    }
    untrashArticle(){

    }
    deleteArticle(){

    }



}
