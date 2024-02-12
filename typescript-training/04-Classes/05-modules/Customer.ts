export class Customer{
   
    //constructor
    constructor(private _firstName: string, private _lastName: string){
    };


    // not invoked as a function but accessed like a prop 
    public get firstName():string{
        return this._firstName;
    }

    public set setterFName(param: string){
        this._firstName = param;
    }    
    
    public get lastName():string {
        return this._lastName;
    }
    public set setterLName(param: string){
        this._lastName = param;
    }
}
