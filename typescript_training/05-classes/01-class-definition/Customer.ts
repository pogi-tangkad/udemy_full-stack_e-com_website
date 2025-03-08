class Customer {
    //properties
    //private not accessible outside of class code(customer.firstName is invalid)
    private _firstName: string;
    private _lastName: string;

    //constructor
    //the question mark identifies a possible optional argument
    constructor(theFirst?:string, theLast?:string) {
        //this read as
        //variable equals if argument doesn't exist then value else argument
        this._firstName = !theFirst ? "" : theFirst;
        this._lastName = !theLast ? "" : theLast;
    }

    //Setters and Getters
    public getFirstName(): string {
        return this._firstName;
    }
    public setFirstName(theFirst: string): void {
        this._firstName = theFirst;
    }

    //Accessors: notice no return type (string or void) also public is not needed
    get lasttName() {
        return this._lastName
    }
    set lastName(theLast: string) {
        this._lastName = theLast;
    }

}

//use class
//now works with new optional constructor setup
let myCustomer1: Customer = new Customer();

//firstName requires a call to set method
myCustomer1.setFirstName("Pogi");
//lastName uses an Accessor to set
myCustomer1.lastName = "Tangkad";


let myCustomer2: Customer = new Customer("Kevin", "Repking");

//The same issue occurs here. firsName needs to use the get method
console.log(`Customer 1: ${myCustomer1.getFirstName()} ${myCustomer1.lastName}`);
console.log(`Customer 2: ${myCustomer2.getFirstName()} ${myCustomer2.lastName}`);



