import { getInputDirection } from "./input.js";


export const snakeSpeed = 5;
const snakeBody = [ 
    {x: 11, y: 11}
]
let newSegments = 0;

export let update = () => {
    addSegments();
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

let addScore = () => {
    let currentScore = document.querySelector('#score-count').innerHTML;
    currentScore++;
    let newScore = currentScore;
    return document.querySelector('#score-count').innerHTML = newScore;
    
}

export let expandSnake = (amount) => {
    newSegments += amount;
    foodSound.play();
    foodSound.setVolume(0.5);
    addScore();
}

export let onSnake = (position, { ignoreHead = false } = {}) => {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

export let getSnakeHead = () => {
    return snakeBody[0]
}

export let snakeIntersection = () => {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

let equalPositions = (pos1, pos2) => {
    return (
        pos1.x === pos2.x && pos1.y === pos2.y
    )
};

let addSegments = () => {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }

    newSegments = 0;
}