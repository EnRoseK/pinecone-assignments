import { useState } from 'react';

export const State = () => {
    const [todoList, setTodoList] = useState([]);
    const [value, setValue] = useState('');

    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <div style={{ marginBottom: 20 }}>
                <input type='text' onChange={(e) => setValue(e.target.value)} value={value} />
                <button
                    onClick={() => {
                        setTodoList([...todoList, value]);
                        setValue('');
                    }}
                >
                    Add Item
                </button>
            </div>
            <ul>
                {todoList.map((item, ind) => (
                    <li
                        style={{
                            cursor: 'pointer',
                        }}
                        key={`item-${ind}`}
                        onClick={() => setTodoList(todoList.filter((item, index) => ind !== index && item))}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
