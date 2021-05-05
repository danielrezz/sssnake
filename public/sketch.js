let song;
let foodSound;
let dieSound;

function preload() {
    song = loadSound("./public/snake song.mp3");
    foodSound = loadSound("./public/EAT.mp3");
    dieSound = loadSound("./public/DIE.mp3");
}

function setup() {
    song.play();
}

function hideStartText() {
  let text = document.getElementById('start-text');
    text.style.display = "none";
}

function keyPressed() {
  hideStartText();
    if (getAudioContext().state !== 'running') {
      getAudioContext().resume();
    }
  }