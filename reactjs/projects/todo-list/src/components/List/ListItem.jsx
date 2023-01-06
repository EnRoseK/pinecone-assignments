import { FaTrash } from 'react-icons/fa';
import { useState } from 'react';

export const ListItem = ({ item, ind, deleteTodo, updateTodo }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(item);

    const styles = {
        checked: {
            textDecoration: isChecked ? 'line-through' : 'none',
            fontStyle: isChecked ? 'italic' : 'normal',
            color: isChecked ? '#ddd' : 'inherit',
        },
        editInput: {
            width: '100%',
            padding: 10,
            display: isEditing ? 'block' : 'none',
        },
        listItem: {
            display: isEditing ? 'none' : 'block',
        },
    };

    return (
        <li
            onClick={(e) => {
                e.detail === 2 && setIsEditing(true);
            }}
        >
            <div style={styles.listItem}>
                <input
                    type='checkbox'
                    onChange={(e) => {
                        setIsChecked(e.target.checked);
                    }}
                />
                <span style={styles.checked}>{item}</span>
            </div>
            <button onClick={() => deleteTodo(ind)} style={styles.listItem}>
                <FaTrash />
            </button>
            <input
                style={styles.editInput}
                type='text'
                value={value}
                onKeyDown={(e) => {
                    e.key === 'Enter' && setIsEditing(false);
                    updateTodo(ind, value);
                }}
                onChange={(e) => setValue(e.target.value)}
            />
        </li>
    );
};
