let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');
import { snakeSpeed, update as updateSnake, draw as drawSnake,
getSnakeHead, snakeIntersection } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { outsideGrid } from './grid.js';

let main = (currentTime) => {

    if (gameOver) {

        dieSound.play();
        dieSound.setVolume(0.4);
        song.stop();
        if (confirm('Game over. Press ok to restart.')) {
            window.location = '/'
            getAudioContext().resume();
        }
        return
        
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / snakeSpeed) return;

    lastRenderTime = currentTime;

    update()
    draw()
}

window.requestAnimationFrame(main);

let update = () => {
    updateSnake();
    updateFood();
    checkDeath();
}

let draw = () => {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

let checkDeath = () => {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}