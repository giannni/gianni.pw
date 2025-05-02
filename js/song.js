function random_number(min, max) 
{  
    return Math.floor(Math.random() * (max - min) + min); 
}

var music = document.getElementById("music");

const audio_sources = ["wicked.mp3"];

function select_song()
{
    var random_int = random_number(1,8);
    var song = audio_sources[random_int];
    var audio = document.querySelector("source").src = "./music/" + song;
    music.volume = 0.1;
    music.play();
    console.log("song selected");
}

select_song();