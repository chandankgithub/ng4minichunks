import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cards-view',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  objs=[1,2,3,4,5,6,7,8,9,10];
  
  constructor() { }

  ngOnInit() {
  }

}
