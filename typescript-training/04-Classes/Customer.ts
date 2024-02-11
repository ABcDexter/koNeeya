class Customer{
    // properties
    private firstName: string;
    private lastName: string;
    public name: string;
    //constructor
    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;

    };


    public setName(first: any, last: any): void{ //any means that it can take any type
        this.name = first + " " + last;
    }

    public getName(): string {
        return this.name;
    }
    
}
/* 
myCustomer.firstName = 'Anu';
myCustomer.lastName = "Bee";
*/

let myCustomer = new Customer('','');

myCustomer.setName('Anubhav', 'B');
console.log(`Hello ${myCustomer.getName()} `);
























































































