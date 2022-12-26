let windowHeight = window.innerHeight;
let documentHeight = document.body.offsetHeight;
let targetScrollY = documentHeight - windowHeight;

const getScrollTopPercent = () => {
    return Math.round((window.scrollY * 100) / targetScrollY);
};

const updateScrollProgress = () => {
    const target = document.querySelector('.progress');
    const progressBar = document.querySelector('.progress-bar');
    const person = document.querySelector('.person');

    target.innerHTML = getScrollTopPercent() + '%';
    progressBar.style.width = getScrollTopPercent() + '%';
    person.style.top = getScrollTopPercent() + '%';
};

document.addEventListener('scroll', updateScrollProgress);

window.addEventListener('resize', () => {
    windowHeight = window.innerHeight;
    documentHeight = document.body.offsetHeight;
    targetScrollY = documentHeight - windowHeight;
});

const runBoxTarget = document.querySelector('.run-box');

runBoxTarget.addEventListener('mouseenter', () => {
    runBoxTarget.classList.add('active');
});

runBoxTarget.addEventListener('mouseout', () => {
    runBoxTarget.classList.remove('active');
});
