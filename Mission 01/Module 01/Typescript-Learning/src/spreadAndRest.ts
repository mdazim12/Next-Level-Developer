
// spread oprator for array

const friends = ['Rahim' , 'Karim'];

const schoolFrinds = ['pintu' , 'chintu' , 'bulbul'];

const collageFriend = ['Mr. Smart' , 'Mr Very Smart' , 'very smary'];


friends.push(...schoolFrinds);
friends.push(...collageFriend);

// console.log(friends)



// spread oprator objects


const user = {
    name : 'Azim',
    phone : '01723232313',
}

const otherInfo = {
    hobby : 'outing',
    color : 'black',
}

const userInfo = {...user , ...otherInfo};

// console.log(userInfo);


//Rest oprator

// const sendInvite = (frined1 : string, friend2 : string, friend3 : string) => {
//     console.log(`send invitation to ${frined1}`)
//     console.log(`send invitation to ${friend2}`)
//     console.log(`send invitation to ${friend3}`)
// }
 
// sendInvite('pintu' , 'cintu' , 'bulbul');



const sendInvite = (...friends : string[]) => { 
    friends.forEach((friend : string) => console.log(`Send inviation to : ${friend}`) )

}
    
sendInvite('pintu' , 'cintu' , 'bulbul', 'chulbul' , 'Nigaj');




















