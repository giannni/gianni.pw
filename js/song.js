var songs =
[
    { filename: "alone.mp3"},
    { filename: "brainstorm!.mp3"},
    { filename: "different.mp3"},
    { filename: "dive.mp3"},
    { filename: "doing time.mp3"},
    { filename: "dreams.mp3"},
    { filename: "everytime.mp3"},
	{ filename: "falling down.mp3"},
	{ filename: "fumes.mp3"},
	{ filename: "got the guap.mp3"},
    { filename: "im a fool.mp3"},
    { filename: "in my feelings.mp3"},
    { filename: "killedmyself.wav"},
    { filename: "let me go.mp3"},
    { filename: "live.mp3"},
    { filename: "mannequin.mp3"},
    { filename: "mistake.mp3"},
    { filename: "newfit.mp3"},
    { filename: "no love.mp3"},
    { filename: "time flies.mp3"},
    { filename: "time for it.mp3"},
    { filename: "too much.mp3"},
    { filename: "Venetia.mp3"},
    { filename: "whats up now.mp3"},
    { filename: "You.mp3"},
];

var randomIndex = Math.floor(Math.random() * songs.length);
var song = songs[randomIndex];
var audio = document.querySelector("source").src = "./music/" + song.filename;

var fs = require('fs');
var files = fs.readdirSync('./music/');
var fileArray = [];
fileArray.push(files);
var x = fileArray.toString();
x.forEach(function(entry) {
  console.log(entry);
});