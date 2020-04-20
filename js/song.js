function randomNumber(min, max) 
{  
    return Math.floor(Math.random() * (max - min) + min); 
}
function selectSong()
{
    var randomInt = randomNumber(1,54);
    var song = randomInt.toString();
    var audio = document.querySelector("source").src = "./music/" + song + ".mp3";
}
selectSong();
var music = document.getElementById("music");
music.volume = 0.03;
music.onended = function() {
    selectSong();
};