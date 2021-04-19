let song;
let foodSound;
let dieSound;

function preload() {
    song = loadSound("snake song.mp3");
    foodSound = loadSound("EAT.mp3");
    dieSound = loadSound("DIE.mp3");
}

function setup() {
    song.play();
    song.loop();
}

function keyPressed() {
    if (getAudioContext().state !== 'running') {
      getAudioContext().resume();
    }
  }