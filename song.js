var songs =
[
    { filename: "wwjd.mp3"},
    { filename: "rockout.mp3"},
    { filename: "motorola.mp3"},
    { filename: "instrumental.mp3"},
	{ filename: "prettyface.mp3"},
    { filename: "kiss.mp3"},
    { filename: "aboutu.mp3"},
    { filename: "bean.mp3"},
];

var randomIndex = Math.floor(Math.random() * songs.length);
var song = songs[randomIndex];
document.querySelector("source").src = "./music/" + song.filename;
var audio = document.currentScript.parentElement;
audio.volume = 0.20;