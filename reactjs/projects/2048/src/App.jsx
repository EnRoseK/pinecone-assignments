import './App.css';
import { useState } from 'react';

const PuzzleRow = ({ row }) => {
    return row.map((col, index) => (
        <div key={`col-${index}`} className={`tile tile-${col}`}>
            {col !== 0 && col}
        </div>
    ));
};

const App = () => {
    const [puzzle, setPuzzle] = useState([
        [2, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]);

    const generateTileVal = () => {
        const percentage = Math.floor(Math.random() * 100) + 1;

        if (percentage >= 70) return 4;
        return 2;
    };

    const generate = () => {
        let xPos = Math.floor(Math.random() * 4);
        let yPos = Math.floor(Math.random() * 4);

        while (puzzle[xPos][yPos] !== 0) {
            xPos = Math.floor(Math.random() * 4);
            yPos = Math.floor(Math.random() * 4);
        }

        return { x: xPos, y: yPos };
    };

    const reversePuzzle = (curPuzzle) => {
        const reversedPuzzle = [];

        for (let i = 0; i < curPuzzle.length; i++) {
            reversedPuzzle.push([]);
        }

        for (let i = 0; i < curPuzzle.length; i++) {
            for (let j = 0; j < curPuzzle[i].length; j++) {
                reversedPuzzle[j].push(curPuzzle[i][j]);
            }
        }

        return reversedPuzzle;
    };

    const moveLeft = () => {
        const newPuzzle = [];

        for (const row of puzzle) {
            const filtered = row.filter((item) => item !== 0);
            const newRow = [];

            for (let i = 0; i < filtered.length; i++) {
                if (filtered[i] === filtered[i + 1]) {
                    newRow.push(filtered[i] + filtered[i + 1]);
                    i++;
                } else {
                    newRow.push(filtered[i]);
                }
            }

            const newLength = 4 - newRow.length;

            for (let i = 0; i < newLength; i++) {
                newRow.push(0);
            }

            newPuzzle.push(newRow);
        }

        const newTile = generate();
        newPuzzle[newTile.x][newTile.y] = generateTileVal();

        console.log(newPuzzle);

        setPuzzle(newPuzzle);
    };

    const moveRight = () => {
        const newPuzzle = [];

        for (const row of puzzle) {
            const filtered = row.filter((item) => item !== 0);
            const newRow = [];

            for (let i = filtered.length - 1; i >= 0; i--) {
                if (filtered[i] === filtered[i - 1]) {
                    newRow.push(filtered[i] + filtered[i - 1]);
                    i--;
                } else {
                    newRow.push(filtered[i]);
                }
            }

            const newLength = 4 - newRow.length;

            for (let i = 0; i < newLength; i++) {
                newRow.push(0);
            }

            newPuzzle.push(newRow.reverse());
        }

        const newTile = generate();
        newPuzzle[newTile.x][newTile.y] = generateTileVal();

        console.log(newPuzzle);

        setPuzzle(newPuzzle);
    };

    const moveDown = () => {
        const newPuzzle = [];
        const reversedPuzzle = reversePuzzle(puzzle);

        for (const row of reversedPuzzle) {
            const filtered = row.filter((item) => item !== 0);
            const newRow = [];

            for (let i = filtered.length - 1; i >= 0; i--) {
                if (filtered[i] === filtered[i - 1]) {
                    newRow.push(filtered[i] + filtered[i - 1]);
                    i--;
                } else {
                    newRow.push(filtered[i]);
                }
            }

            const newLength = 4 - newRow.length;

            for (let i = 0; i < newLength; i++) {
                newRow.push(0);
            }

            newPuzzle.push(newRow.reverse());
        }

        const agPuzzle = reversePuzzle(newPuzzle);
        const newTile = generate();

        agPuzzle[newTile.x][newTile.y] = generateTileVal();

        console.log(agPuzzle);

        setPuzzle(agPuzzle);
    };

    const moveUp = () => {
        const newPuzzle = [];
        const reversedPuzzle = reversePuzzle(puzzle);

        for (const row of reversedPuzzle) {
            const filtered = row.filter((item) => item !== 0);
            const newRow = [];

            for (let i = 0; i < filtered.length; i++) {
                if (filtered[i] === filtered[i + 1]) {
                    newRow.push(filtered[i] + filtered[i + 1]);
                    i++;
                } else {
                    newRow.push(filtered[i]);
                }
            }

            const newLength = 4 - newRow.length;

            for (let i = 0; i < newLength; i++) {
                newRow.push(0);
            }

            newPuzzle.push(newRow);
        }

        const agPuzzle = reversePuzzle(newPuzzle);
        const newTile = generate();
        agPuzzle[newTile.x][newTile.y] = generateTileVal();

        console.log(agPuzzle);

        setPuzzle(agPuzzle);
    };

    const keyHandler = (e) => {
        switch (e.key) {
            case 'ArrowUp':
                moveUp();
                break;
            case 'ArrowDown':
                moveDown();
                break;
            case 'ArrowLeft':
                moveLeft();
                break;
            case 'ArrowRight':
                moveRight();
                break;
            default:
                break;
        }
    };

    return (
        <div className='wrapper' onKeyDown={keyHandler} tabIndex={0}>
            <h1>2048 Game</h1>
            <div className='board'>
                {puzzle.map((puzzleRow, index) => (
                    <PuzzleRow row={puzzleRow} key={`row-${index}`} />
                ))}
            </div>
        </div>
    );
};

export default App;
