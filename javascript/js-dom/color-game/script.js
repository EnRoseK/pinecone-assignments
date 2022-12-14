let SCORE = 0;
let TILE_COUNT = 4;
const TIMER = 10;
let MILLISECONDS = 0;
let SECONDS = TIMER;
let countDown;

const timerTarget = document.querySelector('h5');
const scoreTarget = document.querySelector('#scoreTarget');
const parent = document.querySelector('ul');
const gameOverScreen = document.querySelector('.game-over-screen');
const gameOverTarget = document.getElementById('gameOverTarget');
const restartGameBtn = document.querySelector('.restartGame');
const startGameBtn = document.querySelector('.startGame');

let isGameOver = false;

const startGame = () => {
    TILE_COUNT = 4;
    parent.style.width = '21`0px';
    updateScore(0 - SCORE);
    MILLISECONDS = 0;
    SECONDS = TIMER;
    isGameOver = false;
    gameOverScreen.classList.remove('active');
    countDown = setInterval(updateTimer, 10);
    reDraw();
};

const gameOver = () => {
    isGameOver = true;
    gameOverScreen.classList.add('active');
    gameOverTarget.innerText = SCORE;
};

const updateTimer = () => {
    if (MILLISECONDS <= 0) {
        SECONDS--;
        MILLISECONDS = 990;
    }
    MILLISECONDS -= 10;

    if (SECONDS <= 0 || (MILLISECONDS <= 0 && SECONDS <= 0)) {
        SECONDS = 0;
        MILLISECONDS = 0;
        clearInterval(countDown);
        gameOver();
    }

    let timerResult = ``;
    if (SECONDS < 10) {
        timerResult += '0';
    }
    timerResult += SECONDS;
    timerResult += ':';
    if (MILLISECONDS < 100) timerResult += '0';
    if (MILLISECONDS < 10) timerResult += '0';
    timerResult += MILLISECONDS;

    timerTarget.innerText = timerResult;
};

const updateScore = (point) => {
    SCORE += point;
    scoreTarget.innerHTML = SCORE;
    if (SCORE >= 10) {
        TILE_COUNT = 6;
        parent.style.width = '320px';
    }
    if (SCORE >= 20) TILE_COUNT = 9;

    if (SCORE >= 30) {
        TILE_COUNT = 12;
        parent.style.width = '430px';
    }

    if (SCORE >= 40) TILE_COUNT = 16;
};

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomColor = () => {
    const red = getRandomNumber(0, 255);
    const green = getRandomNumber(0, 255);
    const blue = getRandomNumber(0, 255);

    return [red, green, blue];
};

const getDifferentColor = (colors) => {
    const random = getRandomNumber(0, 2);
    const newColors = [...colors];
    let color = colors[random];
    color > 126 ? (color -= 50) : (color += 50);

    newColors[random] = color;
    return `rgb(${newColors[0]}, ${newColors[1]}, ${newColors[2]})`;
};

const reDraw = () => {
    parent.innerHTML = '';

    const colors = getRandomColor();
    const randomIndex = getRandomNumber(0, TILE_COUNT - 1);

    for (let i = 0; i < TILE_COUNT; i++) {
        const li = document.createElement('li');
        const isNormal = i !== randomIndex;
        if (isNormal) li.style.background = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
        else {
            li.style.background = getDifferentColor(colors);
        }
        li.addEventListener('click', () => {
            if (!countDown) countDown = setInterval(updateTimer, 10);
            if (isNormal) {
                SECONDS -= 2;
            } else {
                updateScore(1);
                SECONDS += 1;
                reDraw();
            }
        });

        parent.appendChild(li);
    }
};

reDraw();

restartGameBtn.addEventListener('click', startGame);
gameOverScreen.addEventListener('click', () => {
    gameOverScreen.classList.remove('active');
    startGame();
});
