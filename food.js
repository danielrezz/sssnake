import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let getRandomFoodPosition = () => {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}

let food = getRandomFoodPosition();
const expansionRate = 1;

export let update = () => {
    if (onSnake(food)) {
        expandSnake(expansionRate)
        food = getRandomFoodPosition();
    }
}

export let draw = (gameBoard) => {
    
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        gameBoard.appendChild(foodElement);
}

