// // Play drum by keyboard press

// // Play music by mouse click

// document.getElementById('button').onclick = function(){
//     //Getting button and listning for click
//     document.getElementById('audio').play();
//     //Utilizing the HTML Audio/Video DOM Reference to play audio/video
//     }
//     //to play on the key A do this(using Jquery):
//     document.addEventListener('keydown', function(e) {
//         if(e.keyCode == 65){
//         document.getElementById('audio').play();
//         }
//       });

const sound = new Audio();
document.addEventListener('keydown', event =>{

switch(event.key){
    case "q":
        sound.src = './sounds/boom.wav'
        sound.play()
    break;
    case "w":
            sound.src = './sounds/clap.wav'
            sound.play()
    break;
    case "e":
            sound.src = './sounds/hihat.wav'
            sound.play()
    break;
    case "r":
            sound.src = './sounds/kick.wav'
            sound.play()
    break;
    case "t":
            sound.src = './sounds/openhat.wav'
            sound.play()
    break;
    case "y":
            sound.src = './sounds/ride.wav'
            sound.play()
    break;
    case "u":
            sound.src = './sounds/snare.wav'
            sound.play()
    break;
    case "i":
            sound.src = './sounds/tink.wav'
            sound.play()
    break;
    case "o":
            sound.src = './sounds/tom.wav'
            sound.play()
    break;
}});