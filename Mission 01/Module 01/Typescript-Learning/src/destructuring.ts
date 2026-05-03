
/// object destructuring

const user = {
    id : 123,
    name : {
        firstName : 'Md',
        middleName : 'Azim',
        lastName : 'Uddin'    
    },
    gender : 'male',
    favouriteColor : 'Black'
}

/// const myFavourieColor = user.favouriteColor;
/// const myMiddleName = user.name.middleName;


const {favouriteColor : myFavourieColor , name : {middleName : myMiddleName}} = user;

// console.log(myFavourieColor, myMiddleName)


// Array Destructuring

const friends = ['karim' , 'Rohim' ,'Mahim']

// const myBestFriend =friends[1];

// const [A, myBestFriend , C] = friends;
const [,,myBestFriend ] = friends;


console.log(myBestFriend)



