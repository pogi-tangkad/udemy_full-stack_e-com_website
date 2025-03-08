"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TSCustomer_1 = require("./TSCustomer");
var newCustomer = new TSCustomer_1.TSCustomer("Kevin", "Repking");
console.log("Hello, my name is ".concat(newCustomer.firstName, " ").concat(newCustomer.lastName));
newCustomer.firstName = "Pogi";
newCustomer.lastName = "Tangkad";
console.log("I prefer to use ".concat(newCustomer.firstName, "-").concat(newCustomer.lastName, " online"));
