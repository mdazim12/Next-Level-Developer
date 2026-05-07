//// Key Of constraint


type RichPepolesVehicle = {
    car : string;
    bike : string;
    cng  : string
}


type MyVehicle1 = 'Bike' |'car' | 'cng';
type MyVehicle2 = keyof RichPepolesVehicle;


// const MyVehicle:MyVehicle2 = 'ship';



type User = {
    id : number;
    name : string;
    address : {
        city : string;
    }
}


const user : User = {
    id : 12123,
    name : 'Azim',
    address : {
        city : 'ctg',
    },
};


// const myName = user.name;

// const myId = user['id'];
// const myName = user['name'];
// const address = user['address']


// console.log({myId,myName, address})


const getPropertyFormObj = <X> (obj: X, key : keyof X ) => {
    return obj[key];
}


// const result = getPropertyFormObj(user, 'city');


// console.log(result)



const student = {
    id : 1234,
    class : 'four',
}

const product = {
    brand : 'Hp',
}

const result6 = getPropertyFormObj(student,'id');


const result5 = getPropertyFormObj(product,'brand');
 












