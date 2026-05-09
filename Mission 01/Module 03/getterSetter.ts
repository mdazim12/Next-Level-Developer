
// getter
// setter



class BankAccount {
    public readonly userId : number;
    public userName : string;
    protected userBalacne : number;

    constructor(useId : number,userName: string, userBalacne: number) {
        this.userId = useId;
        this.userName = userName;
        this.userBalacne = userBalacne;
    }


    // Balance set kortese

//    addBalance(balance : number) {
//      return   this.userBalacne = this.userBalacne + balance;
//     }



/// using setter 

set addBalance(amount : number) {
    this.userBalacne = this.userBalacne + amount;
}


    //  getBalance() {
    //     return this.userBalacne;
    //  }

//gettter use kore get korte chai


get getBalance() {
  return  this.userBalacne
} 

}

const mezbaBhaiAccount = new BankAccount(111,'mezba',20);

// mezbaBhaiAccount.addBalance(100) /// funcation call kora lagtese
// mezbaBhaiAccount.addBalance(60)

// console.log(mezbaBhaiAccount.getBalance());   // funcation call kora latese


mezbaBhaiAccount.addBalance = 100;
mezbaBhaiAccount.addBalance = 60;

console.log(mezbaBhaiAccount);
console.log(mezbaBhaiAccount.getBalance);

