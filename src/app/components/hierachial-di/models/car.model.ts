export class Car {
    private _description: string;
    private _name: string;

    set description(val: string) {
        this._description = val;
    }
    get description() {
        return this._description;
    }
    set name(val: string) {
        this._name = val;
    }
    get name() {
        return this._name;
    }


}