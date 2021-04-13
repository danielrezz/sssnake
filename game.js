let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');
import { snakeSpeed, update as updateSnake, draw as drawSnake } from './snake.js'

let main = (currentTime) => {
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
}

let draw = () => {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
}