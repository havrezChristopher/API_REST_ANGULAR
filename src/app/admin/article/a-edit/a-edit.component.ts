import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-a-edit',
  templateUrl: './a-edit.component.html',
  styleUrls: ['./a-edit.component.css']
})
export class AEditComponent implements OnInit {

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
