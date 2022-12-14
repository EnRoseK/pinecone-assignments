const clock = document.getElementById('clock');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const pauseBtn = document.getElementById('pauseBtn');
let timer;

let minutes = 0,
    seconds = 0,
    miliseconds = 0;

const updateTimer = () => {
    let result = ``;
    miliseconds += 10;
    if (miliseconds > 990) {
        seconds++;
        miliseconds = 0;
    }
    if (seconds > 59) {
        minutes++;
        seconds = 0;
    }
    if (minutes < 10) result += 0;
    result += minutes;
    result += ':';
    if (seconds < 10) result += 0;
    result += seconds;
    result += ':';
    if (miliseconds < 100) result += 0;
    if (miliseconds < 10) result += 0;
    result += miliseconds;

    clock.innerText = result;
};

startBtn.addEventListener('click', () => {
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    clock.innerText = '00:00:00';
    timer = setInterval(updateTimer, 10);
});

stopBtn.addEventListener('click', () => {
    clearInterval(timer);
    pauseBtn.innerText = 'Pause';
});

pauseBtn.addEventListener('click', () => {
    const text = pauseBtn.innerText.toLowerCase();
    if (text === 'pause') {
        clearInterval(timer);
        pauseBtn.innerText = 'Continue';
    } else {
        timer = setInterval(updateTimer, 10);
        pauseBtn.innerText = 'Pause';
    }
});
