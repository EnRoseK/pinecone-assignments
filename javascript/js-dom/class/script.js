// document.getElementById('helloText').innerHTML = 'Hello World!';
// const txt = 'Hello World';
// document.getElementsByClassName('helloText')[0].innerHTML = txt;

// const dummyEls = document.getElementsByClassName('dummy');
// for (let i = 0; i < dummyEls.length; i++) {
//     dummyEls[i].innerHTML = 'Dummy Text!';
// }
// document.getElementById('demo').innerHTML = 'Date: ' + Date();
// document.getElementById('target').innerHTML = `<p>Hello World</p>`;
// const targetEl = document.getElementById('target');
// const pTag = document.createElement('p');
// pTag.className = 'demo';
// pTag.id = 'demoId';

// const bTag = document.createElement('b');
// bTag.innerText = 'This is bold text';

// pTag.appendChild(bTag);

// targetEl.appendChild(pTag);

// const testEl = document.getElementById('test');
// testEl.style.backgroundColor = 'blue';
// testEl.style.color = 'red';
// testEl.style.fontSize = '24px';
// testEl.style.textAlign = 'center';

// const myButton = document.getElementById('myBtn');

// const changeBGColor = () => {
//     const color1 = Math.floor(Math.random() * 256);
//     const color2 = Math.floor(Math.random() * 256);
//     const color3 = Math.floor(Math.random() * 256);

//     document.querySelector('html').style.background = `rgb(${color1}, ${color2}, ${color3})`;
// };

// myButton.addEventListener('click', changeBGColor);

let score = 0;
const scoreTarget = document.querySelector('#scoreTarget');
const parent = document.querySelector('ul');
const tileCount = 4;
let colorDiff = 100;

const updateScore = (point, color) => {
    score += point;
    colorDiff -= color;
    scoreTarget.innerHTML = score;
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

const getDifferentColor = (colors, num) => {
    const random = getRandomNumber(0, 2);
    const newColors = [...colors];
    let color = colors[random];
    color > 126 ? (color -= num) : (color += num);

    newColors[random] = color;
    return `rgb(${newColors[0]}, ${newColors[1]}, ${newColors[2]})`;
};

const reDraw = () => {
    parent.innerHTML = '';

    const colors = getRandomColor();
    const randomIndex = getRandomNumber(0, tileCount - 1);

    for (let i = 0; i < tileCount; i++) {
        const li = document.createElement('li');
        const isNormal = i !== randomIndex;
        if (isNormal) li.style.background = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
        else {
            li.style.background = getDifferentColor(colors, colorDiff);
        }
        li.addEventListener('click', () => {
            if (isNormal) {
                updateScore(-2, 5);
            } else {
                updateScore(1, 5);
                reDraw();
            }
        });

        parent.appendChild(li);
    }
};

reDraw();
