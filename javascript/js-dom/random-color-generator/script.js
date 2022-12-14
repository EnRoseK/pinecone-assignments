const body = document.querySelector('body');
const btn = document.querySelector('button');

const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomColor = () => {
    const green = getRandomNum(0, 255),
        red = getRandomNum(0, 255),
        blue = getRandomNum(0, 255);

    return [green, red, blue];
};

btn.addEventListener('click', () => {
    const bodyBG = getRandomColor();
    const btnColor = getRandomColor();

    body.style.background = `rgb(${bodyBG[0]}, ${bodyBG[1]}, ${bodyBG[2]})`;
    btn.style.color = `rgb(${btnColor[0]}, ${btnColor[1]}, ${btnColor[2]})`;
});
