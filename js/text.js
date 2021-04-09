function indefiniteWrite() {
    let strs = [
        "bro headshot only is mroe sus than fuckigng ay ppl on pornhub",
        "lol purple you can toggle off now we all reported you no wonder your perm muted",
        "buddy you move like a silver, crosshair plavcement like a silver but ungodly one taps",
        "how bad do you havae to be to cheat this hard and still be mg2 lmfao",
        "common cheater claiming high rank",
        "cheating lmao imagine that",
        "u claim a bunch for cheating",
        "typical pizza face with anime avatar",
    ];

    var num = getRandomInt(strs.length);

    console.log("writing " + strs[num]);

    var typeWriteElement = document.getElementById('text_typewrite');

    var typewriter = new Typewriter(typeWriteElement, { loop: true });

    typewriter.typeString(strs[num]).pauseFor(5000).deleteAll().pauseFor(100).callFunction(() => {
        typewriter.stop();
        indefiniteWrite();
    }).start();
}