/// map type

const arrayOfNum : number[] = [1,4,6,10];

const arrayOfString : string[] = ['1', '4', '6'];

const arrayOfStringUsingMap: string[] = 
arrayOfNum.map((num) => num.toString());

console.log(arrayOfStringUsingMap);


//map type


const user = {
    id : 222,

}

// user.id = 111;

type AreaOfNum = {
    height : number;
    weight : number
};


type height = AreaOfNum['height']
 
// type AreaOfString = {
//     height : string;
//     weight : string
// };


type AreaOfString = {
    [key in keyof AreaOfNum ] : string;
}


// generic map


type Area <T> = {
    [key in keyof T] : T[key];
}


const area1: Area<{height: string; width : number}> = {
    height : '50',
    width : 40,
}






 