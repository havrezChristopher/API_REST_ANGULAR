import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-u-edit',
  templateUrl: './u-edit.component.html',
  styleUrls: ['./u-edit.component.css']
})
export class UEditComponent implements OnInit {

  constructor(private activated: ActivatedRoute) { }

  ngOnInit(): void {
    // Soucription au services activated et on ce branche au params de l url 
    this.activated.params.subscribe(
      // ici on récupérent et traite ce que l ont recoit (data)
      (data) => {
        console.log(data);
        
      }
    )
  }

}
