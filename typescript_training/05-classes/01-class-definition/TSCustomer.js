"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TSCustomer = void 0;
var TSCustomer = /** @class */ (function () {
    //automatic constructor
    function TSCustomer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(TSCustomer.prototype, "firstName", {
        //sets and gets
        get: function () {
            return this._firstName;
        },
        set: function (theFirst) {
            this._firstName = theFirst;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TSCustomer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (theLast) {
            this._lastName = theLast;
        },
        enumerable: false,
        configurable: true
    });
    return TSCustomer;
}());
exports.TSCustomer = TSCustomer;
/*
let myCustomer3: TSCustomer = new TSCustomer("Pogi", "Tangkad");

console.log(`${myCustomer3.firstName} ${myCustomer3.lastName}`);
*/ 
