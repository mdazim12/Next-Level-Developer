class Parent {
    name : string;
    age : number;
    address : string


    constructor (name : string, age: number , address: string) {
        this.name = name;  // common
        this.age  = age;   // common 
        this.address = address;  // common
    }

   
    getSlepp(numOfHours : number ) {
        console.log(`${this.name} ${numOfHours} ghota ghumai`);
    }
}







class Student extends Parent {}


const student1 = new Student(`Mr Fakibajj` , 18, 'Bangladesh');

student1.getSlepp(15);
student1


class Teacher extends Parent {
    // name : string; // common
    // age : number; // common
    // address : string; // common
    desination : string;  // own prpperty


    constructor ( name:string, age : number, address: string, desination : string) {
        // this.name = name;  // common
        // this.age  = age;    // common
        // this.address = address;  // common


        super(name,age,address);

        this.desination = desination;
    }

    // getSlepp(numOfHours : number ) {
    //     console.log(`${this.name} ${numOfHours} ghota ghumai`);
    // }


    takeClass(numOfClass : number) {
        console.log(`${this.name} ${numOfClass} ghonta class nei`);
    }
}

const teacher1 = new Teacher('Smart teacher' , 25, 'Bangladeshi' , 'senior teacher' )

teacher1.takeClass(4);




