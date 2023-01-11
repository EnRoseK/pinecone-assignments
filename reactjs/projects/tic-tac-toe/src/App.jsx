import './App.css';
import { useState } from 'react';

const App = () => {
    const [game, setGame] = useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]);
    const [turn, setTurn] = useState('X');
    const [isOver, setIsOver] = useState(false);
    const [isDraw, setIsDraw] = useState(false);

    const isOutOfMoves = (newGame) => {
        let count = 0;
        for (const row of newGame) {
            for (const col of row) {
                col === 0 && count++;
            }
        }

        if (count === 0) {
            setIsDraw(true);
            return true;
        } else {
            return false;
        }
    };

    const checkX = (newGame, x) => {
        for (let i = 0; i < newGame[x].length; i++) {
            if (newGame[x][i] !== turn) return false;
        }

        return true;
    };

    const checkY = (newGame, y) => {
        for (let i = 0; i < newGame.length; i++) {
            if (newGame[i][y] !== turn) return false;
        }

        return true;
    };

    const checkDiagFirst = (newGame) => {
        for (let i = 0; i < newGame.length; i++) {
            if (newGame[i][i] !== turn) return false;
        }

        return true;
    };

    const checkDiagSecond = (newGame) => {
        let j = newGame.length - 1;
        for (let i = 0; i < newGame.length; i++) {
            if (newGame[i][j] !== turn) return false;
            j--;
        }

        return true;
    };

    const isGameOver = (newGame, x, y) => {
        if (checkX(newGame, x)) return true;

        if (checkY(newGame, y)) return true;

        if (
            x === (newGame.length - 1) / 2 &&
            y === (newGame.length - 1) / 2 &&
            (checkDiagFirst(newGame) || checkDiagSecond(newGame))
        )
            return true;

        if (x === y && checkDiagFirst(newGame)) return true;

        if (checkDiagSecond(newGame)) return true;

        if (isOutOfMoves(newGame)) return true;

        return false;
    };

    const tileHandler = (x, y) => {
        const newGame = [...game];

        if (newGame[x][y] === 0) {
            newGame[x][y] = turn;

            if (isGameOver(newGame, x, y)) {
                setIsOver(!isOver);
                return;
            }

            setTurn(turn === 'X' ? 'O' : 'X');
            setGame(newGame);
        }
    };

    const startGameHandler = () => {
        setIsOver(false);
        setTurn('X');
        setGame([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ]);
        setIsDraw(false);
    };

    return (
        <>
            <div id='gameTarget'>
                {game.map((row, i) => {
                    return row.map((col, j) => {
                        return (
                            <div
                                onClick={() => {
                                    tileHandler(i, j);
                                }}
                                className={`tile player${col}`}
                                key={`tile-${i}-${j}`}
                            >
                                {col !== 0 && col}
                            </div>
                        );
                    });
                })}
            </div>

            <div id='gameOverScreen' className={isOver ? 'active' : ''}>
                <h1>{isDraw ? `Draw` : `Player ${turn} won!`}</h1>
                <select>
                    <option value={3}>3</option>
                    <option value={5}>5</option>
                </select>
                <div id='startGame' onClick={startGameHandler}>
                    New Game
                </div>
            </div>
        </>
    );
};

export default App;
