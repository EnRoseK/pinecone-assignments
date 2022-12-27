const gameTarget = document.querySelector('#gameTarget');
const turnTarget = document.getElementById('turn');
const gameOverScreen = document.getElementById('gameOverScreen');
const startGameBtn = document.getElementById('startGame');
const root = document.querySelector(':root');

let score;

let SIZE = 3;
let playerTurn = 'X';
let moves = SIZE * SIZE;

const updateTurnUI = () => {
    turnTarget.innerHTML = `Turn: Player ${playerTurn}`;
};

const checkX = (x) => {
    for (let i = 0; i < SIZE; i++) if (score[x][i] !== playerTurn) return false;

    return true;
};

const checkY = (y) => {
    for (let i = 0; i < SIZE; i++) if (score[i][y] !== playerTurn) return false;

    return true;
};

const checkDiagFirst = () => {
    for (let i = 0; i < SIZE; i++) if (score[i][i] !== playerTurn) return false;

    return true;
};

const checkDiagSecond = () => {
    let j = SIZE - 1;
    for (let i = 0; i < SIZE; i++) {
        if (score[i][j] !== playerTurn) return false;
        j--;
    }

    return true;
};

const checkWinner = (x, y) => {
    if (checkX(x) || checkY(y)) return true;
    else if (x === 1 && y === 1 && (checkDiagFirst() || checkDiagSecond())) return true;
    else if (x === y && checkDiagFirst()) return true;
    else if (checkDiagSecond()) return true;
    else return false;
};

const tileHandler = (e) => {
    e.target.innerHTML = playerTurn;
    e.target.classList.add(`player${playerTurn}`);
    e.target.style.pointerEvents = 'none';

    const x = Number(e.target.getAttribute('x')),
        y = Number(e.target.getAttribute('y'));

    score[x][y] = playerTurn;
    moves--;

    if (checkWinner(x, y)) {
        gameOverScreen.querySelector('h1').innerHTML = `Player ${playerTurn} Won!!!`;
        gameOverScreen.classList.add('active');
        return;
    }

    if (moves === 0) {
        gameOverScreen.querySelector('h1').innerHTML = `Draw!!!`;
        gameOverScreen.classList.add('active');
        return;
    }

    playerTurn = playerTurn === 'X' ? 'O' : 'X';
    updateTurnUI();
};

const renderTiles = () => {
    gameTarget.innerHTML = ``;

    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            const tile = document.createElement('div');
            tile.classList.add('tile');

            tile.setAttribute(`x`, i);
            tile.setAttribute(`y`, j);

            tile.addEventListener('click', tileHandler);

            gameTarget.appendChild(tile);
        }
    }
};

const startGame = () => {
    score = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];

    playerTurn = 'X';
    moves = SIZE * SIZE;

    root.style.setProperty('--size', SIZE);
    updateTurnUI();
    renderTiles();
};

startGame();

startGameBtn.addEventListener('click', () => {
    gameOverScreen.classList.remove('active');
    startGame();
});

gameOverScreen.addEventListener('click', () => {
    gameOverScreen.classList.remove('active');
    startGame();
});
