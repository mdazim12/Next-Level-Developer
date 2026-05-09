/// OOP  4 Pilllat
// 1.Inheritance
// 2.Polymorphism
// 3.Abstraction
// 4.Encapsulation




// access >> modify

class BankAccount {
    public readonly userId : number;
    public userName : string;
    protected userBalacne : number;

    constructor(useId : number,userName: string, userBalacne: number) {
        this.userId = useId;
        this.userName = userName;
        this.userBalacne = userBalacne;
    }

  private addBalance(balance : number) {
        this.userBalacne = this.userBalacne + balance;
    }

    callHiddenMethod(balance: number) {
    this.addBalance(50)
 }

}

 


class StudentBankAccount extends BankAccount {
    test() {
        this.userBalacne 
    }
}


const mezbaBhaiAccount = new BankAccount(111,'mezba',20);




