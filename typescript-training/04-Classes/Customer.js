var Customer = /** @class */ (function () {
    //constructor
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    ;
    Customer.prototype.setName = function (first, last) {
        this.name = first + " " + last;
    };
    Customer.prototype.getName = function () {
        return this.name;
    };
    return Customer;
}());
/*
myCustomer.firstName = 'Anu';
myCustomer.lastName = "Bee";
*/
var myCustomer = new Customer('', '');
myCustomer.setName('Anubhav', 'B');
console.log("Hello ".concat(myCustomer.getName(), " "));
