function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}  

var randomInt = randomNumber(1,39);
var song = randomInt.toString();
var audio = document.querySelector("source").src = "./music/" + song + ".mp3";
var audio = document.getElementById("music"); audio.volume = 0.1;