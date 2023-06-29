import React, { useRef } from 'react';
import './todos.css';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '../todo/todo';
import { fetchTodos, addTodo } from '../../redux/actions/todosActions';

const Todos = () => {
    const addTodoform = useRef();
    const dispatch = useDispatch();
    dispatch(fetchTodos());
    const todos = useSelector((state)=>state.todosReducers);
    const handleAddTodo = (e)=>{
        e.preventDefault();
        const todoData = {
            id: todos.length,
            libelle: addTodoform.current[0].value,
            state: 0,
            edit: false
        };
        dispatch(addTodo(todoData));
        addTodoform.current[0].value = '';
    }
    return (
        <div className='todos'>
            <h2>Todos</h2>
            <form ref={addTodoform} onSubmit={e=>handleAddTodo(e)}>
                <label htmlFor='libelle'>Libelle:</label>
                <input id='libelle' name='libelle' type='text' />
                <button>Add</button>
            </form>
            <div>
                {todos.todos.length<1?<h1>Aucun Todo</h1>:
                    todos.todos.map(todo=><Todo key={todo.id} todo={todo}/>)
                }                
            </div>
        </div>
    );
};

export default Todos;