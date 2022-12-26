const boxTarget = document.getElementById('box');
const movesTarget = document.getElementById('moves');
const pTarget = document.querySelector('p');
const lostTarget = document.querySelector('h2');
const sizeTarget = document.getElementById('size');
const colorTarget = document.getElementById('color');
const startBtn = document.getElementById('newGameBtn');
const colors = ['red', 'cyan', 'green', 'purple', 'yellow', 'orange'];
let SIZE = 14;
let MOVES = 0;
const values = [];
const selected = [[0, 0]];

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const fillValues = () => {
    for (let i = 0; i < SIZE; i++) {
        values.push([]);
        for (let j = 0; j < SIZE; j++) {
            const color = colors[getRandomNumber(0, 5)];
            values[i].push(color);
        }
    }
};

const changeColors = (color) => {
    for (let i = 0; i < selected.length; i++) {
        values[selected[i][0]][selected[i][1]] = color;
    }
};

const checkSurroundings = (color) => {};

const fillSquare = () => {
    boxTarget.innerHTML = '';

    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            const singleBox = document.createElement('div');
            singleBox.style.background = values[i][j];
            singleBox.setAttribute('x-val', i);
            singleBox.setAttribute('y-val', j);
            singleBox.addEventListener('click', (e) => {
                MOVES++;
                movesTarget.innerText = `${MOVES}/25`;

                pTarget.innerText = '';

                if (MOVES >= 25) {
                    lostTarget.innerText = 'You LOST!!!';
                }

                const x = e.target.getAttribute('x-val');
                const y = e.target.getAttribute('y-val');

                changeColors(values[x][y]);

                fillSquare();
            });

            boxTarget.appendChild(singleBox);
        }
    }
};

fillValues();
fillSquare();
