import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from 'src/app/_Services/article.service.service';
import { IArticle } from 'src/app/_interface/article';

@Component({
  selector: 'app-a-index',
  templateUrl: './a-index.component.html',
  styleUrls: ['./a-index.component.css']
})
export class AIndexComponent implements OnInit {

articleList:any [] = []
// iArticle pour le types
  constructor( private articleService:ArticleServiceService){}


ngOnInit(): void {
  this.articleService.getAllArticle().subscribe(data => {
    console.log(data);
    this.articleList = data.data
    
  })
}
// Methode pour supression temporaire
deleteTrash(id :number ){
  console.log(id);
  this.articleService.trashArticle(id).subscribe(data => {
    console.log(data);
    // je recharge le composant pour mettre a jours l'état 
    this.ngOnInit()
    
  })
  
}
// methode pour récupere la supression
deleteUnTrash(id :any){
  
  this.articleService.trashArticle(id).subscribe(data => {
    console.log(data);
    this.ngOnInit()
    
  })
}
}
