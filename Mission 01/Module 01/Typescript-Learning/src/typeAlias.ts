

/// Object type alias


type User = {
     id : number,
        name : {
            firstName : string;
            lastName : string;
        },
        gender : 'male' | 'female',
        contactNo : string,
        adress : {
            division : string,
            city : string
        }
}
    
    
    
    const user1 : User = {
        id : 123,
        name : {
            firstName : 'Md',
            lastName : 'uddin'
        },
        gender : 'male',
        contactNo : '01714313',
        adress : {
            division : 'Dhaka',
            city : 'Narsingdi'
        }

    }


    const user2 : User = {
        id : 123,
        name : {
            firstName : 'joan',
            lastName : 'weal'
        },
        gender : 'male',
        contactNo : '017000',
        adress : {
            division : 'Barisal',
            city : 'Burguna'
        }

    }


    /// Booleen type alias


    type IsAdmin = true;
    const isAdmin : IsAdmin = true;


    /// string tyoe alias

    type Name = string

    const myName : Name = 'joan weak';

    /// function type alias

    type AddFunc = ( num1 : number , num2 : number) => number;

    const add :AddFunc = (num1 , num2 ) => num1 + num2

    







