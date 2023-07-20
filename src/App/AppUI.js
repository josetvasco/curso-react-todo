import { CreateTodoButton } from '../CreateTodoButton';
import { LoadingTodos } from '../LoadingTodos';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { ErrorTodos } from '../ErrorTodos';
import { EmptyTodos } from '../EmptyTodos';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { useContext } from 'react';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI () {
    const  { 
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openModal,
    } = useContext(TodoContext)
    
    return (
        <>
            <TodoCounter/>
            <TodoSearch />
    
            <TodoList>
                {loading && (
                    <>
                        <LoadingTodos/>
                        <LoadingTodos/>
                        <LoadingTodos/>
                    </>
                )}

                {error && <ErrorTodos/>}

                {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}    
                
                {   
                    searchedTodos.map((todo) => (
                        <TodoItem 
                            key={todo.text} 
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    )) 
                }
            </TodoList>
    
            <CreateTodoButton />

            {
                openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )
            }
        </>
    );
}

export {AppUI}; 