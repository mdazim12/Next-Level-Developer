/// OOP  4 Pilllat
// 1.Inheritance
// 2.Polymorphism
// 3.Abstraction
// 4.Encapsulation



/// Abstraction
/// get the Idea think about the Implemenation later


/*
    1.Interface 
    2.abstract classs

*/



// idea 
// interface MediaPlayer {
//     play() : void;
//     pause() : void;
//     stop() : void;
// }

// /// implemenation

// class MusicPlayer implements MediaPlayer{
//     play() {
//         console.log('Playing music ....');
//     }
//     pause(){
//         console.log('Music Pasued...');
//     }
//     stop() {
//         console.log('music Stopped')
//     }
// }



// const MezbaPlayer = new MusicPlayer()
// MezbaPlayer.play();


abstract class MediaPlayer {
   abstract play() : void;
   abstract pause() : void;
   abstract stop() : void;
}


class MezbaPlayer extends MediaPlayer {
    play() {
        console.log(`Playing music ...`);
    }

    pause() {
        console.log(`Music is pasued...`);
    }

    stop(){
        console.log(`Music is stopped`);
    }
}


const mezbaplayer1 = new MezbaPlayer;
mezbaplayer1.pause()














