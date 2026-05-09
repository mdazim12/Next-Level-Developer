
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

   addBalance(balance : number) {
        this.userBalacne = this.userBalacne + balance;
    }

}


class StudentBankAccount extends BankAccount {
    test() {
        this.userBalacne 
    }
}


const mezbaBhaiAccount = new BankAccount(111,'mezba',20);

mezbaBhaiAccount.addBalance(100)
mezbaBhaiAccount.addBalance(50)

console.log(mezbaBhaiAccount);


