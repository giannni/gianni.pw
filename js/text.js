function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function indefiniteWrite() {
    let strs = [
        '"bro headshot only is mroe sus than fuckign gay ppl on pornhub" - you must be gay huh?',
        '"lol purple you can toggle off now we all reported you" - delusional much?',
        '"crosshair plavcement like a silver but ungodly one taps" - some low elo shitter',
        '"how bad do you havae to be to cheat this hard and still be mg2 lmfao" - mg2 hardstuck complaining?',
        '"common cheater claiming high rank" - delusional ape',
        '"cheating lmao imagine that" - yeah im imagining it right now',
        '"u claim a bunch for cheating" - someone who cant fathom someone is better than him',
        '"typical pizza face with anime avatar" - old man whos been playing cs for 15 years',
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