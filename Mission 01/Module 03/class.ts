
// class Animal {
//     name : string;
//     species : string;
//     sound : string;

//     constructor (name : string, species : string, sound : string){
//         this.name = name;
//         this.species = species;
//         this.sound = sound;

//     }

//     makeSound() {
//         console.log(` ${this.name}  makeing sound : ${this.sound}`);
//     }
// }


// parameter Property

class Animal {
    // public  name : string;
    // public species : string;
    // public sound : string;

    constructor (public name : string, public species : string, public sound : string){
        // this.name = name;
        // this.species = species;
        // this.sound = sound;

    }

    makeSound() {
        console.log(` ${this.name}  makeing sound : ${this.sound}`);
    }
}



const dog = new Animal('dogesh bhai' , 'dog', 'ghew ghew');

const cat = new Animal('Cat bhai' ,'cat', 'mew mew')

dog.makeSound();

