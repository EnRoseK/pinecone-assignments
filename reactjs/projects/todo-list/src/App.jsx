import './App.css';
import { useState } from 'react';
import { Form } from './components/Form';
import { List } from './components/List';
import { RxHamburgerMenu } from 'react-icons/rx';

const App = () => {
    const [todo, setTodo] = useState([]);

    const addTodo = (item) => setTodo([...todo, item]);
    const deleteTodo = (ind) => setTodo(todo.filter((item, curIndex) => curIndex !== ind && item));
    const updateTodo = (ind, value) => {
        setTodo(
            todo.map((item, curIndex) => {
                if (curIndex === ind) return value;
                return item;
            })
        );
    };

    return (
        <div className='container'>
            <h1>Todos</h1>
            <Form addTodo={addTodo} />
            <List todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        </div>
    );
};

export default App;
