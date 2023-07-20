import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';

function TodoItem({text, completed, onComplete, onDelete}) {
    

    return (
        <li>
            <CompleteIcon 
                completed={completed}
                onComplete={onComplete}
            />
            {/* <span 
                className={`check ${completed && 'check--completed'}`}
                onClick={onComplete}
            >
                V
            </span> */}
            <p className={`todo-item ${completed && 'todo-item--completed'}`}>{text}</p>
            <DeleteIcon
                onDelete={onDelete}
            />
            {/* <span
                className="delete"
                onClick={onDelete}
            >
            X
            </span> */}
        </li>
    );
}

export { TodoItem }