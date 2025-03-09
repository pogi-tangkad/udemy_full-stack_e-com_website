
Object.defineProperty(exports, "__esModule", { value: true });
const TSCustomer_1 = require("./TSCustomer");
let newCustomer = new TSCustomer_1.TSCustomer("Kevin", "Repking");
console.log(`Hello, my name is ${newCustomer.firstName} ${newCustomer.lastName}`);
newCustomer.firstName = "Pogi";
newCustomer.lastName = "Tangkad";
console.log(`I prefer to use ${newCustomer.firstName}-${newCustomer.lastName} online`);
