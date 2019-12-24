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
	{ filename: "canal.mp3"},
];

var randomIndex = Math.floor(Math.random() * songs.length);
var song = songs[randomIndex];
var audio = document.querySelector("source").src = "./music/" + song.filename;