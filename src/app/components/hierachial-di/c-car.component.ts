import { CarService } from './services/car.service';
import { Component, OnInit } from '@angular/core';
import { CarService3 } from "./services/car.service3";

@Component({
    selector: 'c-car',
    template:`
        <div> C: {{_description}} </div>
    `,
    providers: [
        {
            provide: CarService, useClass: CarService3
        }
    ]
})

export class CCarComponent implements OnInit {

    private _description:string;

    constructor(private _carService: CarService) { 
        this._description = this._carService.getCar().description;
    }

    ngOnInit() { }
}