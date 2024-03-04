import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDataArticle } from '../_interface/article';
import { IArticle } from '../_interface/article';
import { IApi } from '../_interface/iapi';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  private API_URL = environment.API_URL

  constructor(private http: HttpClient) { }

  getAllArticle(): Observable<IDataArticle> {
    return this.http.get<IDataArticle>(`${this.API_URL}/article`)

  }
  // type de l'observable IArticle
  getArticle(id: any): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/article/${id}`)
  }
  addArticle(article: any): Observable<IApi> {
    return this.http.put<IApi>(`${this.API_URL}/article`, article);
  }
  updateArticle(article: IArticle): Observable<IApi> {
    return this.http.patch<IApi>(`${this.API_URL}/article/${article.id}`, article);
  }
  trashArticle(id:number) : Observable<IApi>{
    return this.http.delete<IApi>(`${this.API_URL}/article/trash/${id}`)

  }
  untrashArticle(id:number) : Observable<IApi>{
    return this.http.post<IApi>(`${this.API_URL}/article/untrash/${id}`,{})

  }
  deleteArticle() {

  }



}
