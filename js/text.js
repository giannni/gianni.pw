function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function indefiniteWrite() {
    let strs = [
        '"test"',
    ];

    var num = getRandomInt(strs.length);

    var typElement = document.getElementById('typElement');

    var typewriter = new Typewriter(typElement, { autoStart: true, loop: true });

    typewriter.typeString(strs[num]).pauseFor(5000).deleteAll().pauseFor(100).callFunction(() => {
        typewriter.stop();
        indefiniteWrite();
    }).start();
}

indefiniteWrite();