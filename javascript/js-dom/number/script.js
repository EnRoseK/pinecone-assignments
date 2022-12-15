let SCORE = 20;
const HIGHSCORES = [];
let randomNum;

const guessInput = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const messageArea = document.querySelector('.message');
const scoreArea = document.querySelector('.score');
const highScoreArea = document.querySelector('.highscore');
const againBtn = document.querySelector('.again');

const startGame = () => {
    SCORE = 20;
    updateScoreUI();
    randomNum = getRandomNumber(1, 20);
    messageArea.innerText = `Тааж эхлээрэй...`;
    messageArea.style.background = 'inherit';
    guessInput.value = '';
};

const checkNumber = () => {
    const input = guessInput.value;
    if (!Number(input)) {
        messageArea.innerText = `Тоо оруул!`;
    } else if (Number(input) <= 0) {
        messageArea.innerText = `0-ээс их тоо оруул!`;
    } else if (Number(input) > 20) {
        messageArea.innerText = `20-ээс бага тоо оруул!`;
    } else if (Number(input) > randomNum) {
        messageArea.innerText = `Бага тоо оруул!`;
        SCORE--;
        updateScoreUI();
    } else if (Number(input) < randomNum) {
        messageArea.innerText = `Их тоо оруул!`;
        SCORE--;
        updateScoreUI();
    } else if (Number(input) === randomNum) {
        messageArea.innerText = 'Зөв таалаа';
        messageArea.style.background = '#60b347';
        HIGHSCORES.push(SCORE);
        updateHighScoreUI();
    }
};

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const updateScoreUI = () => {
    scoreArea.innerText = SCORE;
};

const updateHighScoreUI = () => {
    const max = Math.max(...HIGHSCORES);
    highScoreArea.innerText = max;
};

randomNum = getRandomNumber(1, 20);

checkBtn.addEventListener('click', checkNumber);

guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkNumber();
});

againBtn.addEventListener('click', startGame);
