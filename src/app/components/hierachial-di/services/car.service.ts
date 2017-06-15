import { EngineService } from './engine.service';
import { Car } from './../models/car.model';
import { Injectable } from '@angular/core';

import { Engine } from "app/components/hierachial-di/models/engine.model";
import { Tires } from "app/components/hierachial-di/models/tires.model";
import { TiresService } from "app/components/hierachial-di/services/tires.service";
import { CarService2 } from "app/components/hierachial-di/services/car.service2";




@Injectable()
export class CarService{
    
    engineService: EngineService;
    tires: TiresService;
    constructor(engineService: EngineService, tiresService: TiresService){
        this.engineService = engineService;
        this.tires = tiresService;
    }

    getCar(): Car{
        let car = new Car();
        car.description = "Volkswagen " +"car with Engine load " + this.engineService.getEngine().cylinder + " and classical tyre of " + this.tires.getTires().tire;

        return car;
    }
}



