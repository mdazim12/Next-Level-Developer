/// uniounAndIntersection

type UserRole = 'admin' | 'user' 

const getDeshboard = ( role : UserRole) => {
    if(role === 'admin' ) {
        return 'admin Deshboard'
    }
    else if (role === 'user') {
        return 'user Deshboard'
    }
    else {
        return 'Guest deshboard'
    }
}

getDeshboard ('admin')



/// Intersection

type Employee = {
    id :  string;
    name : string;
    phoneNo : string;
}

type Manager = {
    designation : string;
    teamSize : number; 
}

type EmployeeManager = Employee & Manager;

const ChowdhuryShaheb : EmployeeManager = {
    id : '123',
    name : 'Chowdhury Shaheb',
    phoneNo : '01323554545',
    designation : 'Manager',
    teamSize : 20,

}