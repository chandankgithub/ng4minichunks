export class Tires{
    private _tire: string="Front Runner";

    set tire(val: string){
        this._tire =val;
    }

    get tire(){
        return this._tire;
    }
}