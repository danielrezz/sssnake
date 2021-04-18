let foodSound;

function preload() {
    foodSound = loadSound("snake song.mp3");
}

function setup() {
    foodSound.play();
}

function draw() {};

function keyPressed() {
    if (getAudioContext().state !== 'running') {
      getAudioContext().resume();
    }
  }