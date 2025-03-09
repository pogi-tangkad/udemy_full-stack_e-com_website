"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TSCustomer = void 0;
class TSCustomer {
    //automatic constructor
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    //sets and gets
    get firstName() {
        return this._firstName;
    }
    set firstName(theFirst) {
        this._firstName = theFirst;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(theLast) {
        this._lastName = theLast;
    }
}
exports.TSCustomer = TSCustomer;
/*
let myCustomer3: TSCustomer = new TSCustomer("Pogi", "Tangkad");

console.log(`${myCustomer3.firstName} ${myCustomer3.lastName}`);
*/ 
