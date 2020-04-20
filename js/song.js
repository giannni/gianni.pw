function randomNumber(min, max) 
{  
    return Math.floor(Math.random() * (max - min) + min); 
}

var music = document.getElementById("music");

function selectSong()
{
    var randomInt = randomNumber(1,54);
    var song = randomInt.toString();
    var audio = document.querySelector("source").src = "./music/" + song + ".mp3";
    music.volume = 0.03;
}
selectSong();
music.play();

music.onended = function() {
    selectSong();
};