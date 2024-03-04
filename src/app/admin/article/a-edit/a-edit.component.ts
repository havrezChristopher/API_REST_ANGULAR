import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleServiceService } from 'src/app/_Services/article.service.service';
import { IArticle } from 'src/app/_interface/article';
import { IApi } from 'src/app/_interface/iapi';
@Component({
  selector: 'app-a-edit',
  templateUrl: './a-edit.component.html',
  styleUrls: ['./a-edit.component.css']
})
export class AEditComponent implements OnInit {
    article : IArticle = {
      //! types IArticle
    id: 0,
    nom:'',
    description:'',
    prix:0,
    quantiter:0,
    stock:true,
    createdAt: '',
    updatedAt: '',
    deletedAt: null 
  }
  constructor(
    private activated: ActivatedRoute,
    private articleService:ArticleServiceService
  ) { }

  ngOnInit(): void {
    let id = this.activated.snapshot.paramMap.get('id') 
    console.log(id);
    this.articleService.getArticle(id).subscribe(
      data => { 
        console.log(data);
        this.article = data
      }
    )
  }
  onSubmit(){
    this.articleService.updateArticle(this.article).subscribe(data =>{
      console.log(data.message);
      
    })
  }
}
