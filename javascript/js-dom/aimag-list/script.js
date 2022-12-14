const liEls = document.querySelectorAll('li');
console.log(liEls[0]);

console.log(liEls[liEls.length - 1]);

const sukhBaatar = document.getElementById('aimag-315');
console.log(sukhBaatar);

const parent = document.querySelector('ul');
parent.style.margin = '0';
parent.style.padding = '0';

for (let i = 0; i < liEls.length; i++) {
    liEls[i].style.fontSize = '24px';
    liEls[i].style.color = 'brown';
    liEls[i].style.marginTop = '10px';
}

for (let i = 0; i < liEls.length; i++) {
    const aimagId = liEls[i].id.split('-');
    switch (aimagId[1][0]) {
        case '1':
            liEls[i].style.background = 'green';
            break;
        case '2':
            liEls[i].style.background = 'red';
            break;
        case '3':
            liEls[i].style.background = 'blue';
            break;
        case '4':
            liEls[i].style.background = 'yellow';
            break;
        case '5':
            liEls[i].style.background = 'aqua';
            break;
        default:
            break;
    }
}
