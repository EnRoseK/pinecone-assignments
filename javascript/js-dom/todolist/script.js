const todoTarget = document.getElementById('todoTarget');
const testTarget = document.getElementById('testTarget');
const inputTarget = document.getElementById('inputTarget');

const createBefore = () => {
    const before = document.createElement('input');
    before.type = 'checkbox';
    before.style.width = '20px';
    before.style.height = '20px';
    before.style.marginRight = '5px';
    before.style.cursor = 'pointer';
    before.style.marginTop = '0';

    return before;
};

const createAfter = () => {
    const after = document.createElement('button');
    after.style.width = '20px';
    after.style.height = '20px';
    after.style.marginLeft = '5px';
    after.style.padding = '1px 3px';
    after.value = '×';

    return after;
};

const createList = (str) => {
    const li = document.createElement('li');
    const after = createAfter();
    const before = createBefore();
    const text = document.createElement('span');
    text.innerText = str;

    li.style.display = 'flex';
    li.style.alignItems = 'center';

    before.addEventListener('click', (e) => {
        if (e.target.checked) text.style.textDecoration = 'line-through';
        else text.style.textDecoration = 'none';
    });

    li.appendChild(before);

    li.appendChild(text);

    after.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    });

    li.appendChild(after);
    todoTarget.appendChild(li);
};

inputTarget.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        createList(e.target.value);
        e.target.value = '';
    }
});
