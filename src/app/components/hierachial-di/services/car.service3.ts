import { Car } from './../models/car.model';
import { TiresService } from './tires.service';
import { EngineService } from './engine.service';
import { Injectable } from '@angular/core';
import { CarService2 } from "app/components/hierachial-di/services/car.service2";

@Injectable()
export class CarService3 extends CarService2{
    constructor(engineService: EngineService, tiresService: TiresService){
        super(engineService, tiresService);
        
    }

    getCar() : Car{
        let car = super.getCar();
        console.log(this.engineService)
        console.log(this.engineService.getEngine())
        car.description="Toyota Innova" +" car with Engine load " + this.engineService.getEngine().cylinder + " and classical tyre of " + this.tires.getTires().tire;
        return car;
    }
}