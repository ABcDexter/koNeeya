"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    //constructor
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    ;
    // not invoked as a function but accessed like a prop 
    get firstName() {
        return this._firstName;
    }
    set setterFName(param) {
        this._firstName = param;
    }
    get lastName() {
        return this._lastName;
    }
    set setterLName(param) {
        this._lastName = param;
    }
}
exports.Customer = Customer;
