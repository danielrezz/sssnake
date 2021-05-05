const gridSize = 21;

export let randomGridPosition = () => {
    return {
        x: Math.floor(Math.random() * gridSize) + 1,
        y: Math.floor(Math.random() * gridSize) + 1
    }
}

export let outsideGrid = (position) => {
    return (
        position.x < 1 || position.x > gridSize ||
        position.y < 1 || position.y > gridSize
        )
}