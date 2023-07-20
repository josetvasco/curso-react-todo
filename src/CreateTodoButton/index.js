import { TodoContext } from '../TodoContext';
import { useContext } from 'react';
import './CreateTodoButton.css'

function CreateTodoButton() {
    const { setOpenModal } = useContext(TodoContext);
    
    return (
        <button className='button-create' onClick={ () => {
            setOpenModal( state => !state);
        }}>+</button>
    );
}

export { CreateTodoButton }