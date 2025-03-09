class Customer {
    //constructor
    //the question mark identifies a possible optional argument
    constructor(theFirst, theLast) {
        //this read as
        //variable equals if argument doesn't exist then value else argument
        this._firstName = !theFirst ? "" : theFirst;
        this._lastName = !theLast ? "" : theLast;
    }
    //Setters and Getters
    getFirstName() {
        return this._firstName;
    }
    setFirstName(theFirst) {
        this._firstName = theFirst;
    }
    //Accessors: notice no return type (string or void) also public is not needed
    get lasttName() {
        return this._lastName;
    }
    set lastName(theLast) {
        this._lastName = theLast;
    }
}
//use class
//now works with new optional constructor setup
let myCustomer1 = new Customer();
//firstName requires a call to set method
myCustomer1.setFirstName("Pogi");
//lastName uses an Accessor to set
myCustomer1.lastName = "Tangkad";
let myCustomer2 = new Customer("Kevin", "Repking");
//The same issue occurs here. firsName needs to use the get method
console.log(`Customer 1: ${myCustomer1.getFirstName()} ${myCustomer1.lastName}`);
console.log(`Customer 2: ${myCustomer2.getFirstName()} ${myCustomer2.lastName}`);
