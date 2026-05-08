

/// type guard

type AlphaNeumeric = number | string;


const add = (num1: AlphaNeumeric, num2: AlphaNeumeric) => {
    // return num1 + num2;

    if(typeof num1 === 'number' && typeof num2 === 'number' ) {
        return num1 + num2;
    }
    else {
        num1.toString() + num2.toString();
    }
} 

add(2,2);  // 4

add(2,'2') // 22

add('2' ,2) // 22

add('2' , '2')



// In guard


type NormalUser = {
    name : string;
}

type AdminUser = {
    name : string;
    role : 'Admin'
}

const GetUserInfo = (user:NormalUser | AdminUser) => {

    if('role' in user) {

        console.log(`This ${user.name} and his role is : ${user.role}`);

    }
    else {
        console.log(`This ${user.name} and his role is :`);
    }

    
}

GetUserInfo({name : 'Normal', role : 'Admin'});