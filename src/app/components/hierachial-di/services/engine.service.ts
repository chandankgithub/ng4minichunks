import { Engine } from './../models/engine.model';
export class EngineService{
    constructor(){}

    getEngine(){
        return new Engine();
    }
}
