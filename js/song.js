function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}  


var randomInt = randomNumber(1,54);
var song = randomInt.toString();
var audio = document.querySelector("source").src = "./music/" + song + ".mp3";
var music = document.getElementById("music");
music.volume = 0.03;