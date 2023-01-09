import './App.css';
import { useState } from 'react';

const App = () => {
    const [names, setNames] = useState(['Болд', 'Бат', 'Дорж', 'Балдан', 'Дондог']);
    const [scores, setScores] = useState([[15, 15, 15, 15, 15]]);
    const [newScores, setNewScores] = useState([0, 0, 0, 0, 0]);

    return (
        <div className='container'>
            <table>
                <thead>
                    {names.map((name) => (
                        <th>{name}</th>
                    ))}
                </thead>
                <tbody>
                    {scores.map((score, i) => {
                        return (
                            <tr>
                                {score.map((singleScore, j) => {
                                    return <td>{singleScore}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const arr = [...scores];
                    const calcScores = [];
                    for (let i = 0; i < arr[arr.length - 1].length; i++) {
                        if (newScores[i] === 0) {
                            calcScores.push(arr[arr.length - 1][i]);
                            continue;
                        }

                        if (!Number(newScores[i])) {
                            calcScores.push(arr[arr.length - 1][i] + 5);
                            continue;
                        }

                        calcScores.push(arr[arr.length - 1][i] - newScores[i]);
                    }
                    arr.push(calcScores);
                    setScores(arr);
                    setNewScores([0, 0, 0, 0, 0]);
                }}
            >
                {newScores.map((item, index) => {
                    return (
                        <select
                            onChange={(e) => {
                                const arr = [...newScores];
                                arr[index] = e.target.value;
                                setNewScores(arr);
                            }}
                            value={newScores[index]}
                        >
                            <option value={0}>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value='fail'>Үсэрсэн</option>
                        </select>
                    );
                })}

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default App;
