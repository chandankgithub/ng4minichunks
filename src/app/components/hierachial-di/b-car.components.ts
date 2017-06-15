import { EngineService } from './services/engine.service';
import { CarService } from './services/car.service';
import { Component, OnInit } from '@angular/core';
import { EngineService2 } from "./services/engine2.service";
import { CarService2 } from "./services/car.service2";

@Component({
    selector: 'b-car',
    template:`
        <div> B: {{_description}} </div>
        <c-car> </c-car>
    `,
    providers: [
        { provide: CarService,    useClass: CarService2 },
        { provide: EngineService, useClass: EngineService2 }
    ]
})

export class BCarComponent implements OnInit {
    private _description:string;

    constructor(private _carService: CarService) {
        this._description = this._carService.getCar().description;
     }

    ngOnInit() { }
}