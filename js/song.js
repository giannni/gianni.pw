var songs =
[
    { filename: "aboutu.mp3"},
    { filename: "DUNKIN DONUTS.mp3"},
    { filename: "fishscale.mp3"},
    { filename: "fumes.mp3"},
	{ filename: "Geeked.mp3"},
    { filename: "killedmyself.wav"},
    { filename: "newfit.mp3"},
    { filename: "time for it.mp3"},
	{ filename: "Baby Pluto.mp3"},
	{ filename: "Celebration Station.mp3"},
	{ filename: "Venetia.mp3"},
    { filename: "in my feelings.mp3"},
    { filename: "diva.mp3"},
    { filename: "too much.mp3"},
    { filename: "got the guap.mp3"},
    { filename: "myron.mp3"},
    { filename: "kobe.mp3"},
];

var randomIndex = Math.floor(Math.random() * songs.length);
var song = songs[randomIndex];
var audio = document.querySelector("source").src = "./music/" + song.filename;