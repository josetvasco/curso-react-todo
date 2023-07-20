import { useLocalStorage } from './useLocalStorage';
import { createContext, useState } from 'react';

const TodoContext = createContext();

function TodoProvider({children}) {
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter( todo => !!todo.completed ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const addTodo = (newTodo) => {
    const newTodos = [...todos];
    newTodos.push({
      text: newTodo,
      completed: false
    });
    saveTodos(newTodos);
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text 
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <TodoContext.Provider value={{
      completedTodos,
      setSearchValue,
      searchedTodos,
      completeTodo,
      searchValue,
      totalTodos,
      deleteTodo,
      addTodo,
      loading,
      error,
      openModal,
      setOpenModal
      }}>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }; 