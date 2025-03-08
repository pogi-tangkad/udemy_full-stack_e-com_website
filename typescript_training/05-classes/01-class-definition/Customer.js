var Customer = /** @class */ (function () {
    //constructor
    //the question mark identifies a possible optional argument
    function Customer(theFirst, theLast) {
        //this read as
        //variable equals if argument doesn't exist then value else argument
        this._firstName = !theFirst ? "" : theFirst;
        this._lastName = !theLast ? "" : theLast;
    }
    //Setters and Getters
    Customer.prototype.getFirstName = function () {
        return this._firstName;
    };
    Customer.prototype.setFirstName = function (theFirst) {
        this._firstName = theFirst;
    };
    Object.defineProperty(Customer.prototype, "lasttName", {
        //Accessors: notice no return type (string or void) also public is not needed
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        set: function (theLast) {
            this._lastName = theLast;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
//use class
//now works with new optional constructor setup
var myCustomer1 = new Customer();
//firstName requires a call to set method
myCustomer1.setFirstName("Pogi");
//lastName uses an Accessor to set
myCustomer1.lastName = "Tangkad";
var myCustomer2 = new Customer("Kevin", "Repking");
//The same issue occurs here. firsName needs to use the get method
console.log("Customer 1: ".concat(myCustomer1.getFirstName(), " ").concat(myCustomer1.lastName));
console.log("Customer 2: ".concat(myCustomer2.getFirstName(), " ").concat(myCustomer2.lastName));
