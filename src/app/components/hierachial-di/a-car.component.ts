import { CarService } from './services/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'a-car',
    template:`
        <div> A: {{_description}} </div>
        <b-car> </b-car>
    `
})

export class ACarComponent implements OnInit {
    private _description:string;

    constructor(private _carService: CarService) {

        this._description = this._carService.getCar().description;
     }

    ngOnInit() { }
}