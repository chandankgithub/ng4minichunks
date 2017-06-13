import { cardServiceProvider } from './../../providers/card.service.provider';
import { LoggerService } from './../../services/logger.service';
import { CardService } from './card.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { Card } from './card'

@Component({
  selector: 'cards-view',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers:[
    // CardService,
    // LoggerService,
    cardServiceProvider
    ]
})

//@Injectable() /**we can use Injectable here (if very much necessary) as well because it initializes the components https://angular.io/guide/dependency-injection#why-injectable */
export class CardsComponent implements OnInit {
  private _cards:Card[];
  
  constructor(private _cardService: CardService) { }

  ngOnInit() {
    this._cards=this._cardService.getCards();
  }

}
