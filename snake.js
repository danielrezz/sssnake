import { getInputDirection } from "./input.js";


export const snakeSpeed = 5;
const snakeBody = [ 
    {x: 11, y: 11}
]

export let update = () => {
    const inputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export let draw = (gameBoard) => {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        gameBoard.appendChild(snakeElement);
        snakeElement.classList.add('snake');
    })
}