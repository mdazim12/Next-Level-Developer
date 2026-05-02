/// funcation
/// arow funcation , normal funcation




// function addNormal (nub1: string, nub2 : number) : number {
//   return nub1 + nub2;
// }

// addNormal('2', 2);


// arrow funcation




const addArrow = (num1: number, num2: number) => num1 + num2 : number;

addArrow(2, 2);



/// obkect => funcation => method

const poorUser = {
    name : 'Azim',
    balance : 0,
    addBalance (value: number) : number {
     const totalBalance = this.balance + value;
     return totalBalance;
    },
};


poorUser.addBalance(100)


/// callback funcation

const arr : number[] = [1,4,6]

const saqArray = arr.map((elem : number) : number => elem * elem )
