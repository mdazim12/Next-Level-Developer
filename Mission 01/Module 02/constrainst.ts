
// constraint : strict rules deya



type student =  {id: number; name : string ; dateOfBrith: string; class: string }




const addStudentToCourses = <T extends student >(studentInfo: T) => {
    return {
        course: 'next level',
        ...studentInfo,
    };
};

const student5 = {
    id: 123,
    name: 'azim',
    hasPen: true,
};

const student6 = {
    id: 1234,
    name: 'Rahim',
    hasCar: true,
    isMarried: true,
    dateOfBrith : '20-02-2020',
    class :'1',
};


const student7 = {
    hasWatch : true,
    id : 115146,
    name : 'joan'
}


const result2 = addStudentToCourses(student6);



console.log(result2)