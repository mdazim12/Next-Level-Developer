/// Generic Function 

// const createArrayWithString = (value : string) => [value];

// const createArrayWithNumber = (value : number) => [value];

// const createArrayWithObject = (value : {
//     id : number,name : string
// }) => {
//     return [value]
// }



const createArrayWithGeneric = <T> (value : T ) => {
  return value
}



// const arrString = createArrayWithString('Apple');
// const arrNumber = createArrayWithNumber(222);
// const arrObj = createArrayWithObject ({
//     id : 124,
//     name : 'Next level Developer'
// })




const arrString = createArrayWithGeneric('Apple');
const arrNumber = createArrayWithGeneric(222);
const arrObj = createArrayWithGeneric ({
    id : 124,
    name : 'Next level Developer'
})




/// tuple 


const createArrayWithTuple = (param1 : string, param2 : number) => [
    param1,
    param2
];


const createArraytTupleWithGeneric = <X,Y> (param1: X, param2 : Y) => [

    param1,
    param2
];

const res1 = createArraytTupleWithGeneric('azim',false);
const res2 = createArraytTupleWithGeneric('2222' , {
    name : 'azim'
})


//// const addCouseTo


const addStudentToCourse = <T> (stuentInfo : T) => {
    return {
        course: 'next level',
        ...stuentInfo,
    }
}

const student1 = {
    id : 123,
    name : 'azim',
    hasPen : true,
}


const student2 = {
    id : 1234,
    name : 'Rahim',
    hasCar :  true,
    isMarried : true,
}


const result = addStudentToCourse(student2);
