import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';

export const Form = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                addTodo(inputValue);
                setInputValue('');
            }}
        >
            <input
                type='text'
                placeholder='Add todo...'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type='submit' style={{ padding: 0 }}>
                <AiOutlinePlusCircle size={24} />
            </button>
        </form>
    );
};
