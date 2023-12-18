import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-e-edit',
  templateUrl: './e-edit.component.html',
  styleUrls: ['./e-edit.component.css']
})
export class EEditComponent implements OnInit {

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
