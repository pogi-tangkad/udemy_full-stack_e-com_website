import { TSCustomer } from './TSCustomer';

let newCustomer: TSCustomer = new TSCustomer("Kevin", "Repking");


console.log(`Hello, my name is ${newCustomer.firstName} ${newCustomer.lastName}`);

newCustomer.firstName = "Pogi";
newCustomer.lastName = "Tangkad";

console.log(`I prefer to use ${newCustomer.firstName}-${newCustomer.lastName} online`)