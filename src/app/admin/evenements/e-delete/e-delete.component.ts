import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-e-delete',
  templateUrl: './e-delete.component.html',
  styleUrls: ['./e-delete.component.css']
})
export class EDeleteComponent {

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
