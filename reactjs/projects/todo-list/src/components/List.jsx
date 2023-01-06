import { ListItem } from './List/ListItem';

export const List = ({ todo, deleteTodo, updateTodo }) => {
    return (
        <ul>
            {todo.map((item, index) => (
                <ListItem
                    item={item}
                    key={`todo-item-${index}`}
                    ind={index}
                    deleteTodo={deleteTodo}
                    updateTodo={updateTodo}
                />
            ))}
        </ul>
    );
};
