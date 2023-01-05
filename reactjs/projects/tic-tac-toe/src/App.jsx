import './App.css';
import { useState } from 'react';

const App = () => {
    const [game, setGame] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]);

    const score = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];

    const [playerTurn, setPlayerTurn] = useState('X');
    let moves = 9;
    const [isGameOver, setisGameOver] = useState(false);

    const checkWinner = (x, y) => {
        if (moves === 0) return true;

        return false;
    };

    const clickHandler = (x, y) => {
        const newGame = [...game];
        newGame[x][y] = playerTurn;
        score[x][y] = playerTurn;
        console.log(score);
        setGame(newGame);
        if (checkWinner()) {
            setisGameOver(true);
            return;
        }
        setPlayerTurn(playerTurn === 'X' ? 'O' : 'X');
    };

    return (
        <>
            <div id='gameTarget'>
                {game.flat().map((item, index) => {
                    const x = Math.floor(index / 3);
                    const y = index - Math.floor(index / 3) * 3;

                    return (
                        <li
                            className={`tile `}
                            key={index}
                            onClick={(e) => {
                                moves--;
                                e.target.classList.add(`player${playerTurn}`);
                                clickHandler(x, y);
                                console.log(moves);
                            }}
                        >
                            {item}
                        </li>
                    );
                })}
            </div>

            <div id='gameOverScreen' className={isGameOver ? 'active' : ''}>
                <h1>Player {playerTurn} won!</h1>
                <div
                    id='startGame'
                    onClick={() => {
                        setGame([
                            ['', '', ''],
                            ['', '', ''],
                            ['', '', ''],
                        ]);
                        setisGameOver(false);
                        moves = 9;
                    }}
                >
                    New Game
                </div>
            </div>
        </>
    );
};

export default App;
