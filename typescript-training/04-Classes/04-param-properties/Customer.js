var Customer = /** @class */ (function () {
    //constructor
    function Customer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    ;
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "setterFName", {
        set: function (param) {
            this._firstName = param;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "setterLName", {
        set: function (param) {
            this._lastName = param;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer('Dexter', 'Columbus');
console.log("Hello ".concat(myCustomer.firstName + " " + myCustomer.lastName, " "));
