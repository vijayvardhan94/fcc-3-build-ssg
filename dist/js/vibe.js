//have a list of items
const vibes = [
    "... you are awesome!",
    "...you are pretty!",
    "...you've got this!"
];
//select a random item
var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))]

//display the random item
//".vibe" is the property name and it appends values form the vibe array"
document.querySelector(".vibe").append(vibe)