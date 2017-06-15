import { Engine } from './../models/engine.model';
import { EngineService } from './engine.service';
export class EngineService2 extends EngineService{

    constructor(){
        super();
    }
    getEngine(){
        console.log('engine2')
       let engine = new Engine();
        engine.cylinder="8 litres"
        return engine;
    }
}