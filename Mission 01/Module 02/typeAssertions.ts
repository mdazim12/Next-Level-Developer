
let anything : any;

anything = 'azim';

const keToGMConverter = (input : string | number ) : string | number | undefined => {
    if(typeof input === 'number') {
        return input * 1000;
    } else if (typeof input === 'string') {
        const [value] = input.split('')
        return  `Converted output is ${Number (value) * 1000 }`;
    }
}


const result1 = keToGMConverter(2) as number;
// result1.valueOf()
const result2 = keToGMConverter ('2kg') as string;
// result2.indexOf()


console.log(result1)
console.log(result2)


type CustomError = {
    message : string;
}

try {
    
} catch (err) {
    console.log((err as CustomError) .message)
}





