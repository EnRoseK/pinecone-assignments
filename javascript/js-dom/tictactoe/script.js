const box = document.querySelector('.outside');
const score = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

let turn = 'X';

const checkRow = (x, y) => {
    let isOver = true;
    for (let i = 0; i < score[x].length; i++) {
        if (score[x][i] !== score[x][y]) {
            isOver = false;
            break;
        }
    }

    return isOver;
};

const checkCol = (x, y) => {
    let isOver = true;
    for (let i = 0; i < score.length; i++) {
        if (score[i][y] !== score[x][y]) {
            isOver = false;
            break;
        }
    }

    return isOver;
};

const checkDiag1 = (x, y) => {
    let isOver = true;

    for (let i = 0; i < score.length; i++) {
        if (score[i][i] !== score[x][y]) {
            isOver = false;
            break;
        }
    }

    return isOver;
};

const checkDiag2 = (x, y) => {
    let isOver = true;

    let j = 2;
    for (let i = 0; i < score.length; i++) {
        if (score[i][j] !== score[x][y]) {
            isOver = false;
            break;
        }
        j--;
    }

    return isOver;
};

const createCells = () => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            cell.setAttribute('x-val', i);
            cell.setAttribute('y-val', j);

            cell.addEventListener('click', (e) => {
                e.target.innerHTML = turn;
                const x = e.target.getAttribute('x-val');
                const y = e.target.getAttribute('y-val');

                score[x][y] = turn;

                turn = turn === 'X' ? 'O' : 'X';

                if ((x === 0 && y === 0) || (x === 2 && y === 2)) {
                }
            });

            box.appendChild(cell);
        }
    }
};

createCells();
