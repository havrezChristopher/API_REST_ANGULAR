import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-a-delete',
  templateUrl: './a-delete.component.html',
  styleUrls: ['./a-delete.component.css']
})
export class ADeleteComponent implements OnInit{

  constructor(
    private activated: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activated.params.subscribe(
      (data) => {
        console.log(data);

      }
    )
  }
}
