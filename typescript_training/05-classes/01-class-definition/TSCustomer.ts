export class TSCustomer {

    //automatic constructor
    constructor(private _firstName: string,
                private _lastName: string) {}
    
    //sets and gets
    get firstName(){
        return this._firstName;
    }
    set firstName(theFirst: string){
        this._firstName = theFirst;
    }

    get lastName(){
        return this._lastName;
    }
    set lastName(theLast: string){
        this._lastName = theLast;
    }

}

/*
let myCustomer3: TSCustomer = new TSCustomer("Pogi", "Tangkad");

console.log(`${myCustomer3.firstName} ${myCustomer3.lastName}`);
*/