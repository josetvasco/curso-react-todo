import { useContext } from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    const { loading, completedTodos, totalTodos, searchValue } = useContext(TodoContext)
    return(
        <>
        {
            loading 
            ? <h1>Cargando<span className='loading'>...</span></h1>
            : searchValue.length > 0
                ? <h1>Buscando<span className='loading'>...</span></h1>
                : totalTodos !== 0 
                    ? totalTodos === completedTodos
                        ? <h1>Has completado todos los <span className='negrita'>TODOs</span></h1>
                        : <h1>Has completado <span className='negrita'>{ completedTodos }</span> de <span className='negrita'>{ totalTodos }</span> TODOs</h1>
                    : <h1>Has completado <span className='negrita'>{ completedTodos }</span> de <span className='negrita'>{ totalTodos }</span> TODOs</h1>
        }
        </>
);
}

export { TodoCounter }