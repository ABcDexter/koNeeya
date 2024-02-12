var CustomerClass = /** @class */ (function () {
    //constructor
    function CustomerClass(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    ;
    return CustomerClass;
}());
var myCustomerObject = new CustomerClass('Anubhav', 'B');
console.log("Hello ".concat(myCustomerObject.firstName + " " + myCustomerObject.lastName, " "));
