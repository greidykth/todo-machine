import React, { useContext, useState } from 'react'
import { TodoContext } from '../../TodoContext'
import './TodoForm.css'

const TodoForm = () => {
    const[newTodoValue, setNewTodoValue] = useState('');

    const {addTodo, setOpenModal} = useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    }

    const onTextChange = (e) => {
        setNewTodoValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

  return (
    <form onSubmit={onSubmit}>
        <label>Escribe tu nuevo TODO</label>
        <textarea 
            value={newTodoValue}
            onChange={onTextChange}
            placeholder='Escribe el todo'
        />
        <div className='TodoForm-buttonContainer'>
            <button
                type="button"
                className='TodoForm-button TodoForm-button--cancel'
                onClick={onCancel}
            >
                Cancelar
            </button>
            <button
                type="submit"
                className='TodoForm-button TodoForm-button--add'
            >
                Añadir
            </button>
        </div>
    </form>
  )
}

export {TodoForm};