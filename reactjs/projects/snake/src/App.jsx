import './App.css';
import { useState, useEffect } from 'react';

const xCells = 10;
const yCells = 10;
const tileWidth = 50;
const tileHeight = 50;
const bodyColor = '#ccc';
const headColor = '#000';

const Tile = ({ x, y, isHead }) => {
    const style = {
        width: tileWidth,
        height: tileHeight,
        background: isHead ? headColor : bodyColor,
        position: 'absolute',
        top: y * tileWidth,
        left: x * tileHeight,
        borderRadius: 15,
        color: 'white',
    };

    return <div style={style}></div>;
};

const App = () => {
    const directions = ['Up', 'Left', 'Down', 'Right'];
    let [direction, setDirection] = useState('Down');
    const [state, setState] = useState(0);
    const [snake, setSnake] = useState([
        { x: 0, y: 2 },
        { x: 0, y: 1 },
        { x: 0, y: 0 },
    ]);
    const [food, setFood] = useState({ x: 5, y: 5 });

    const randomNum = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;

    const generateFood = () => {
        let x = randomNum(0, 9);
        let y = randomNum(0, 9);

        while (checkIfPosExists(x, y)) {
            x = randomNum(0, 9);
            y = randomNum(0, 9);
        }

        setFood({ x: x, y: y });
    };

    const checkIfPosExists = (x, y) => {
        for (let i = 0; i < snake.length; i++) {
            if (snake[i].x === x && snake[i].y === y) return true;
        }

        return false;
    };

    const checkIfFoodEaten = (x, y) => {
        if (x === food.x && y === food.y) return true;
        return false;
    };

    const changeDirection = (movingDirection) => {
        const index = directions.indexOf(movingDirection);
        if (index !== -2) {
            const currentIndex = directions.indexOf(direction);
            if (index % 2 !== currentIndex % 2) setDirection(movingDirection);
        }
    };

    const moveDown = () => {
        let isEaten = false;
        let newSnake = [...snake];
        newSnake = newSnake.map((item, index) => {
            if (index === 0) {
                if (checkIfFoodEaten(item.x, item.y + 1)) {
                    generateFood();
                    isEaten = true;
                }
                if (item.y + 1 === yCells) return { x: item.x, y: 0 };
                return { x: item.x, y: item.y + 1 };
            }
            return { x: newSnake[index - 1].x, y: newSnake[index - 1].y };
        });

        if (isEaten) {
            setSnake([...newSnake, {}]);
        } else {
            setSnake(newSnake);
        }
    };

    const moveRight = () => {
        let newSnake = [...snake];
        newSnake = newSnake.map((item, index) => {
            if (index === 0) {
                if (checkIfFoodEaten(item.x + 1, item.y)) generateFood();
                if (item.x + 1 === xCells) return { x: 0, y: item.y };
                return { x: item.x + 1, y: item.y };
            }
            return { x: newSnake[index - 1].x, y: newSnake[index - 1].y };
        });

        setSnake(newSnake);
    };

    const moveLeft = () => {
        let newSnake = [...snake];
        newSnake = newSnake.map((item, index) => {
            if (index === 0) {
                if (checkIfFoodEaten(item.x - 1, item.y)) generateFood();
                if (item.x - 1 === -1) return { x: 9, y: item.y };
                return { x: item.x - 1, y: item.y };
            }
            return { x: newSnake[index - 1].x, y: newSnake[index - 1].y };
        });

        setSnake(newSnake);
    };

    const moveUp = () => {
        let newSnake = [...snake];
        newSnake = newSnake.map((item, index) => {
            if (index === 0) {
                if (checkIfFoodEaten(item.x, item.y - 1)) generateFood();
                if (item.y - 1 === -1) return { x: item.x, y: 9 };
                return { x: item.x, y: item.y - 1 };
            }
            return { x: newSnake[index - 1].x, y: newSnake[index - 1].y };
        });

        setSnake(newSnake);
    };

    const handleKeyDown = (e) => {
        switch (e.key) {
            case 'ArrowDown':
                changeDirection('Down');
                break;
            case 'ArrowRight':
                changeDirection('Right');
                break;
            case 'ArrowLeft':
                changeDirection('Left');
                break;
            case 'ArrowUp':
                changeDirection('Up');
                break;
            default:
                console.log('Non binary key');
        }
    };

    useEffect(() => {
        switch (direction) {
            case 'Up':
                moveUp();
                break;
            case 'Down':
                moveDown();
                break;
            case 'Left':
                moveLeft();
                break;
            case 'Right':
                moveRight();
                break;
            default:
                console.log('Non binary direction');
        }
    }, [state]);

    setTimeout(() => {
        setState(state + 1);
    }, 500);

    return (
        <div className='container' onKeyDown={handleKeyDown} tabIndex={0}>
            <h1>Snake Game</h1>
            <div
                className='board'
                style={{
                    width: xCells * tileWidth,
                    height: yCells * tileHeight,
                }}
            >
                {snake.map((tile, index) => {
                    const isHead = index === 0;
                    return <Tile x={tile.x} y={tile.y} isHead={isHead} key={`snake-${index}`} />;
                })}

                <div
                    style={{
                        position: 'absolute',
                        top: food.y * tileWidth,
                        left: food.x * tileHeight,
                        background: 'brown',
                        width: tileWidth,
                        height: tileHeight,
                    }}
                ></div>
            </div>
        </div>
    );
};

export default App;
