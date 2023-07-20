import { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';
import Swal from 'sweetalert2';
import './TodoForm.css';

function TodoForm() {
  const { setOpenModal, addTodo } = useContext(TodoContext);
  const [ newTodoValue, setNewTodoValue ] = useState('');
  
  function onSubmit(event) {
    event.preventDefault();
    addTodo(newTodoValue);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'TODO agregado',
      showConfirmButton: false,
      timer: 1500
    })
    setTimeout( () => {
      setOpenModal(false);
    }, 1500)
  }
  
  function onCancel() {
    setOpenModal(false);
  }

  function onChange(event) {
    setNewTodoValue(event.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder="Escribe..."
        value={newTodoValue}
        onChange={onChange}
        required
      />
      <div className="TodoForm-buttonContainer">
        <button 
          type="submit"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
        Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };