import { Tires } from './../models/tires.model';
export class TiresService{

    constructor(){}
    
    getTires(){
        return new Tires()
    }
}

