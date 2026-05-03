////.  nullableUnkownNever.ts

///  Nullable types

const getUser = (input: string | null) => {
    if(input) {
        console.log(`From DB : ${input}`);
    } else {
        console.log(`From DB : All User `);
    }
}

getUser(null)


// unkown

const discountCalculator = (input:unknown) => {
    if(typeof input === 'number') {
        const discountedPrice = input * 0.1
        console.log(discountedPrice);
    }else if (typeof input === 'string') {
        const spiltedInput = input.split(' ');
        console.log(spiltedInput);
    }
}

discountCalculator(100);
discountCalculator('100 TK');
discountCalculator(null)