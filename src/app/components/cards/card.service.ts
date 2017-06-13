import { LoggerService } from './../../services/logger.service';
import { Card } from './card';
import { Injectable } from '@angular/core';

@Injectable()
export class CardService {

    private _usernames: string[]=[
        'Emil Abderhalden', 
        'Richard Abegg',
        'Frederick Abel',
        'Friedrich Accum',
        'Homer Burton Adkins',
        'Peter Agre',
        'Georgius Agricola',
        'Arthur Aikin',
        'Adrien Albert',
        'John Albery',
        'Kurt Alder',
        'Sidney Altman',
        'Faiza Al-Kharafi',
        'Christian B. Anfinsen',
        'Angelo Angeli',
        'Octavio Augusto Ceva Antunes',
        'Anthony Joseph Arduengo',
        'Johan August Arfwedson',
        'Anton Eduard van Arkel',
        'Svante Arrhenius',
        'Larned B. Asprey',
        'Francis William Aston',
        'Amedeo Avogadro'
        ]
    private _cards:Card[]=[];

    constructor(private _loggerService: LoggerService,
                private _isAuthenticatedUser: boolean) {
        console.log(_isAuthenticatedUser);
        this.populateCards(); //this should not be called as the constructor should be light-weighted
     }

    private populateCards(){
        // for(let i=0; i <this._usernames.length; i++ ){
        for(let i=0; i <15; i++ ){
            let card =new Card();
            card.username=this._usernames[i];
            card.description="Scientists have enormous contribution in the advancement of human civilization.";
            this._cards.push(card);
        }
    }

    public getCards(){
        return this._cards;
    }
}