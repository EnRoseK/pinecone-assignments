const SIZE = 4;
let puzzle = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [0, 1, 2, 3],
    [4, 5, 6, 7],
];
let found = 0;
let flippedItems = [];

const gameTarget = document.getElementById('gameTarget');
const tiles = [];

const getTile = (value) => {
    const tile = document.createElement('li');
    const tileFront = document.createElement('div');
    const tileBack = document.createElement('div');

    tileFront.innerText = value;
    tileFront.classList.add('front');
    tileBack.classList.add('back');
    tile.setAttribute('val', value);

    tile.addEventListener('click', () => {
        tile.classList.add('active');
        flippedItems.push(tile);

        if (flippedItems.length >= 2) {
            if (flippedItems[0].getAttribute('val') === flippedItems[1].getAttribute('val')) {
                found++;
                flippedItems[0].classList.add('found');
                flippedItems[1].classList.add('found');
                flippedItems = [];
            } else {
                setTimeout(() => {
                    for (let i = 0; i < flippedItems.length; i++)
                        flippedItems[i].classList.remove('active');
                    flippedItems = [];
                }, 1000);
            }
        }
    });

    tile.appendChild(tileFront);
    tile.appendChild(tileBack);

    tiles.push(tile);

    return tile;
};

for (let i = 0; i < puzzle.length; i++) {
    for (let j = 0; j < puzzle[i].length; j++) {
        gameTarget.appendChild(getTile(puzzle[i][j]));
    }
}
