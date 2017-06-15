import { Car } from './../models/car.model';
import { EngineService } from './engine.service';
import { CarService } from './car.service';
import { Injectable } from '@angular/core';
import { TiresService } from "./tires.service";
@Injectable()
export class CarService2 extends CarService{
    constructor(engineService: EngineService, tiresService: TiresService) {
        super(engineService, tiresService);
    }
    
    getCar(): Car{
        let car = super.getCar();
        car.description="Nissan" +" car with Engine load " + this.engineService.getEngine().cylinder + " and classical tyre of " + this.tires.getTires().tire;
        return car;
    }
}