export class Engine{
    private _cyclinder:string = "4 liters";
    set cylinder(val: string){
        this._cyclinder=val;
    }
    get cylinder(){
        return this._cyclinder;
    }
}
