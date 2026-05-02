// array, object

//ts -- tuple

let bazarlist : string[] = ['eggs' , 'milk' , 'sugar'];

// bazarlist.push(12)
// bazarlist.push(true)



let mixedArr : (string | number)[] = ['eggs', 12 , 'milk' , 1, 'sugar', 2];

mixedArr.push('azim')
mixedArr.push(123)
// mixedArr.push(true)




let coordinates: [number, number] = [20,30]
// let coordinates: [number, number] = [20,30,50]

let couple : [string, string]= ['husband' , 'wife'];
// let couple : string= ['husband' , 'wife'];



let nameAndRoll : [string, number] = ['azim', 84]
// nameAndRoll[0] = 76;


let destination: [string,string,number] = ['Dhaka' , 'Chattrogram' , 3];




// reference type. : object


//     const user : {
        
//         organization : 'PH HERO'; //value => Type : Literal type

//         firstName : string;
//         middleName? : string; // optional Type
//         lastName : string;
//         isMarried : boolean
//     }= {

//         organization : 'PH HERO',


//         firstName : 'Md',
//         middleName : 'Azim',
//         lastName : 'Uddin',
//         isMarried : true,
        

//     }


// user.organization = 'PH HERO fire';









    const user : {
        
        readonly organization : string; //access modifier

        firstName : string;
        middleName? : string; // optional Type
        lastName : string;
        isMarried : boolean
    } = {

        organization : 'PH HERO',


        firstName : 'Md',
        middleName : 'Azim',
        lastName : 'Uddin',
        isMarried : true,
        

    }


user.organization = 'PH HERO fire';





console.log(user)