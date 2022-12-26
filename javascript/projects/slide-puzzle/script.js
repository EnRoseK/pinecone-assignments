const gameTarget = document.getElementById('gameTarget');
const gameOverTarget = document.getElementById('gameOver');
const startGameBtn = document.getElementById('startGame');

let winPuzzle = [];
let startPuzzle = [];
let zeroIndex = [];
const puzzleSize = 3;

const generateRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkNumberExist = (num) => {
    for (let i = 0; i < startPuzzle.length; i++) {
        for (let j = 0; j < startPuzzle[i].length; j++) {
            if (startPuzzle[i].includes(num)) {
                return true;
            }
        }
    }

    return false;
};

const generateWinPuzzle = () => {
    let number = 1;
    for (let i = 0; i < puzzleSize; i++) {
        winPuzzle.push([]);
        for (let j = 0; j < puzzleSize; j++) {
            winPuzzle[i].push(number);
            number++;
        }
    }

    winPuzzle[winPuzzle.length - 1][winPuzzle[winPuzzle.length - 1].length - 1] = 0;
};

const generatePuzzle = () => {
    for (let i = 0; i < puzzleSize; i++) {
        startPuzzle.push([]);
        for (let j = 0; j < puzzleSize; j++) {
            let number = generateRandomNum(0, puzzleSize * puzzleSize - 1);
            while (checkNumberExist(number)) {
                console.log('looping');
                number = generateRandomNum(0, puzzleSize * puzzleSize - 1);
            }
            startPuzzle[i].push(number);
        }
    }
};

const findZeroIndex = () => {
    for (let i = 0; i < startPuzzle.length; i++) {
        for (let j = 0; j < startPuzzle[i].length; j++) {
            if (startPuzzle[i][j] === 0) {
                zeroIndex.push(i);
                zeroIndex.push(j);
                break;
            }
        }
    }
};

const checkPosition = (boxPos, zeroPos) => {
    const xDiff = Math.abs(boxPos[0] - zeroPos[0]);
    const yDiff = Math.abs(boxPos[1] - zeroPos[1]);

    return xDiff + yDiff === 1 ? true : false;
};

const isGameOver = () => {
    let isOver = true;
    for (let i = 0; i < startPuzzle.length; i++) {
        for (let j = 0; j < startPuzzle[i].length; j++) {
            if (winPuzzle[i][j] !== startPuzzle[i][j]) {
                return false;
            }
        }
    }

    return isOver;
};

const boxClickHandler = (e) => {
    const x = e.target.getAttribute('x');
    const y = e.target.getAttribute('y');

    if (checkPosition([x, y], zeroIndex)) {
        let temp = startPuzzle[x][y];
        startPuzzle[x][y] = startPuzzle[zeroIndex[0]][zeroIndex[1]];
        startPuzzle[zeroIndex[0]][zeroIndex[1]] = temp;

        zeroIndex[0] = x;
        zeroIndex[1] = y;

        renderPuzzle();
    }

    if (isGameOver()) {
        startPuzzle[startPuzzle.length - 1][startPuzzle[startPuzzle.length - 1].length - 1] =
            puzzleSize * puzzleSize;
        renderPuzzle();
        setTimeout(() => {
            gameOverTarget.querySelector('h1').innerHTML = `Game Over!`;
            gameOverTarget.classList.add('active');
        }, 1500);
    }
};

const renderPuzzle = () => {
    gameTarget.innerHTML = ``;
    console.log('renderpuzzle');
    gameTarget.style.width = `${puzzleSize * 200}px`;
    gameTarget.style.height = `${puzzleSize * 200}px`;

    for (let i = 0; i < startPuzzle.length; i++) {
        for (let j = 0; j < startPuzzle[i].length; j++) {
            const box = document.createElement('div');
            box.style.width = `calc(100% / ${puzzleSize})`;
            box.style.height = `calc(100% / ${puzzleSize})`;
            box.setAttribute('x', i);
            box.setAttribute('y', j);

            if (startPuzzle[i][j] !== 0) {
                box.style.backgroundImage = `url(./img/0${startPuzzle[i][j]}.jpg)`;
                box.style.backgroundSize = `cover`;
            }

            box.addEventListener('click', boxClickHandler);

            gameTarget.appendChild(box);
        }
    }
};

const startGame = () => {
    winPuzzle = [];
    startPuzzle = [];
    zeroIndex = [];
    generateWinPuzzle();
    generatePuzzle();
    findZeroIndex();
    renderPuzzle();
};

startGameBtn.addEventListener('click', () => {
    gameOverTarget.classList.remove('active');
    startGame();
});

gameOverTarget.addEventListener('click', () => {
    gameOverTarget.classList.remove('active');
    startGame();
});

startGame();
