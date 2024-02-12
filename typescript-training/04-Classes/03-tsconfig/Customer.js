"use strict";
class Customer {
    //constructor
    constructor(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
        this.name = this.firstName + " " + this.lastName;
    }
    ;
    setName(first, last) {
        this.name = first + " " + last;
    }
    getName() {
        return this.name;
    }
    get _firstName() {
        return this.firstName;
    }
    set setterFName(param) {
        this.firstName = param;
    }
    get _lastName() {
        return this.lastName;
    }
    set setterLName(param) {
        this.lastName = param;
    }
}
/*
myCustomer.firstName = 'Anu';
myCustomer.lastName = "Bee";
*/
let myCustomer = new Customer('', '');
myCustomer.setName('Anubhav', 'B');
console.log(`Hello ${myCustomer.getName()} `);
