import { EngineService } from './services/engine.service';
import { CarService } from './services/car.service';
import { CCarComponent } from './c-car.component';
import { BCarComponent } from './b-car.components';
import { ACarComponent } from './a-car.component';
import { Component, OnInit } from '@angular/core';
import { TiresService } from "./services/tires.service";

@Component({
    selector: 'cars',
    template:`
        <h3> Cars </h3>
        <a-car> </a-car>
    `
})

export class CarsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}

export const carComponents = [ CarsComponent, ACarComponent, BCarComponent, CCarComponent]
export const carServices =[
    CarService,
    EngineService,
    TiresService
]