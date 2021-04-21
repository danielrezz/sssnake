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
}

function hideStartText() {
  console.log("hello");
  let text = document.getElementById('start-text');
    text.style.display = "none";
}

function keyPressed() {
  hideStartText();
    if (getAudioContext().state !== 'running') {
      getAudioContext().resume();
    }
  }