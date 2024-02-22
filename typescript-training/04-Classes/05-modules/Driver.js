"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("./Customer");
let myCustomer = new Customer_1.Customer('Dexter', 'Columbuzz');
console.log(`Hello ${myCustomer.firstName + " " + myCustomer.lastName} `);
