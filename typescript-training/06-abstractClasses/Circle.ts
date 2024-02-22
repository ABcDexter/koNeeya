import {Shape} from './Shape';

export class Circle extends Shape {
    
    //    let pi:number = 3.14159265358979;

    constructor(theX: number, theY: number, 
                private _radius: number){
        super(theX, theY);
    }

    // get/set accessors ...
    
    public get radius():number {
        return this._radius;
    }

    public set radius(value: number){
        this._radius= value;
    }
    getInfo(): string{
        return super.getInfo() + `, radius=${this._radius}`;
        
    }

    
    calculateArea(): number {
        return Math.round(Math.PI*this._radius*this._radius);        
    }

}