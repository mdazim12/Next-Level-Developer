/// OOP : instance of type guard / type narrowing

class Person {
    name : string;


    constructor (name : string) {
        this.name = name;
    }

    getSleep(numOfHours: number) {
        console.log(`${this.name} doinik ghonta gumai `);
    }
}

class Student extends Person {
    constructor(name: string) {
        super(name)
    }


    doStudy(numOfHours: number) {
        console.log(`${this.name} doinik ${numOfHours} `);
    }
}


class Teacher extends Person {
    constructor(name:string) {
        super(name)
    }

    takeClass(numOfHours: number) {
        console.log(`${this.name} doinik ${numOfHours} ghonta class nei `);
    }
    
}



// funcation guard


const isStudent = (user: Person) => {
    return user instanceof Student;     // true falase
}


const getUserInfo = (user: Person) => {
    if(user instanceof Student) {
        user.doStudy(10);
    } else if (user instanceof Teacher) {
        user.takeClass(5);
    } else {
        user.getSleep(15)
    }
}; 


const student1 = new Student('Mr. student');

const teacher = new Teacher('Mr.Teacher');

const person = new Person('Mr.Person ')


getUserInfo(person);
