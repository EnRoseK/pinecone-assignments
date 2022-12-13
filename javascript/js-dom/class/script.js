document.getElementById('helloText').innerHTML = 'Hello World!';
const txt = 'Hello World';
document.getElementsByClassName('helloText')[0].innerHTML = txt;

const dummyEls = document.getElementsByClassName('dummy');
for (let i = 0; i < dummyEls.length; i++) {
    dummyEls[i].innerHTML = 'Dummy Text!';
}
document.getElementById('demo').innerHTML = 'Date: ' + Date();
document.getElementById('target').innerHTML = `<p>Hello World</p>`;
const targetEl = document.getElementById('target');
const pTag = document.createElement('p');
pTag.className = 'demo';
pTag.id = 'demoId';

const bTag = document.createElement('b');
bTag.innerText = 'This is bold text';

pTag.appendChild(bTag);

targetEl.appendChild(pTag);

const testEl = document.getElementById('test');
testEl.style.backgroundColor = 'blue';
testEl.style.color = 'red';
testEl.style.fontSize = '24px';
testEl.style.textAlign = 'center';

const myButton = document.getElementById('myBtn');

const changeBGColor = () => {
    const color1 = Math.floor(Math.random() * 256);
    const color2 = Math.floor(Math.random() * 256);
    const color3 = Math.floor(Math.random() * 256);

    document.querySelector('html').style.background = `rgb(${color1}, ${color2}, ${color3})`;
};

myButton.addEventListener('click', changeBGColor);
