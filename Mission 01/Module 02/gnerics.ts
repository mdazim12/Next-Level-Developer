// dynamically generalize : Generic




type GenericArray <T> = Array<T>




// const friends : string[] = ['Mr. X' , 'Mr. Y,' , 'Mr.Z'] ;
const friends : GenericArray<string>= ['Mr. X' , 'Mr. Y,' , 'Mr.Z'] ;


// const rollNumber : number[] = [4,5,11];
const rollNumber : GenericArray<number> = [4,5,11];

// const isEligibale: boolean[] = [true,false];
const isEligibale: GenericArray<boolean> = [true,false,true];



// / Array of object

    const userList: GenericArray<{name : string, age: number}> = [
        {
            name : 'Mr. X',
            age : 22,
        },
        {
            name : 'Mr. Y',
            age : 25, 
        },
        // {
        //     favouriteColor : 'Black'
        // }



    ]






const sqrFunc = (value : number) => {
    return value * value;
};

sqrFunc(4);


type Coordinates <X,Y> = [X,Y]


const coordinates1 : Coordinates<number,number> = [20 , 30];
const coordinates2 : Coordinates <string, string> = ["20", "30"];







