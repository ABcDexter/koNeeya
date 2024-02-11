class CustomerClass{
    // properties
    firstName: string;
    lastName: string;
    name: string;
     //constructor
    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;

    };

}


let myCustomerObject = new CustomerClass('Anubhav', 'B');

console.log(`Hello ${myCustomerObject.firstName + " " + myCustomerObject.lastName} `);
































