class Customer{
    // properties
    private firstName: string;
    private lastName: string;
    public name: string;
    //constructor
    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
        this.name = this.firstName + " " + this.lastName;
    };


    public setName(first: any, last: any): void{ //any means that it can take any type
        this.name = first + " " + last;
    }

    public getName(): string {
        return this.name;
    }

    public get _firstName():string{
        return this.firstName;
    }

    public set setterFName(param: string){
        this.firstName = param;
    }    
    
    public get _lastName():string {
        return this.lastName;
    }
    public set setterLName(param: string){
        this.lastName = param;
    }
}
/* 
myCustomer.firstName = 'Anu';
myCustomer.lastName = "Bee";
*/

let myCustomer = new Customer('','');

myCustomer.setName('Anubhav', 'B');
console.log(`Hello ${myCustomer.getName()} `);



























































































