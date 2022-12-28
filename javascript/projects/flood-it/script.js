const boxTarget = document.querySelector('#box');
const movesTarget = document.querySelector('#moves');
const pTarget = document.querySelector('p');
const lostTarget = document.querySelector('h2');
const sizeTarget = document.querySelector('#size');
const colorTarget = document.querySelector('#color');
const startBtn = document.querySelector('#newGameBtn');

let SIZE = 14;
let COLOR_COUNT = 6;
let MOVES = 0;
let colors;
let colorValues;
let values;

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRandomColor = () => {
    const red = generateRandomNumber(0, 255);
    const green = generateRandomNumber(0, 255);
    const blue = generateRandomNumber(0, 255);

    return `rgb(${red}, ${green}, ${blue})`;
};

const fillValues = () => {
    for (let i = 0; i < SIZE; i++) {
        values.push([]);
        for (let j = 0; j < SIZE; j++) values[i].push(false);
    }

    values[0][0] = true;
};

const generateColors = () => {
    for (let i = 0; i < COLOR_COUNT; i++) colors.push(generateRandomColor());
};

const boxHandler = (e) => {
    const x = e.target.getAttribute('x');
    const y = e.target.getAttribute('y');

    colors[0][0] = colors[x][y];
    renderBoxes();
};

const renderBoxes = () => {
    boxTarget.innerHTML = ``;

    for (let i = 0; i < SIZE; i++) {
        colorValues.push([]);
        for (let j = 0; j < SIZE; j++) {
            const randomIndex = generateRandomNumber(0, COLOR_COUNT - 1);

            const box = document.createElement('div');
            box.style.backgroundColor = colors[randomIndex];
            box.setAttribute('x', i);
            box.setAttribute('y', j);

            colorValues[i].push(colors[randomIndex]);

            box.addEventListener('click', boxHandler);

            boxTarget.appendChild(box);
        }
    }
};

const startGame = () => {
    colors = [];
    colorValues = [];
    values = [];

    generateColors();
    fillValues();
    renderBoxes();
};

startGame();
