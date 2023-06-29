import React, { useRef, useEffect } from 'react';
import './todos.css';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '../todo/todo';
import { fetchTodos, addTodo } from '../../redux/actions/todosActions';

const Todos = () => {
    const addTodoform = useRef();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchTodos());
    },[dispatch]);
    const {todos} = useSelector((state)=>state.todosReducers);
    const handleAddTodo = (e)=>{
        e.preventDefault();
        const todoData = {
            id: Math.floor(Math.random() * 99999),
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
            <form ref={addTodoform} onSubmit={(e)=>handleAddTodo(e)}>
                <label htmlFor='libelle'>Libelle:</label>
                <input id='libelle' name='libelle' type='text' placeholder='New value' required/>
                <button>Add</button>
            </form>
            <div>
                {
                    todos.length<1 ? <h1>Aucun Todo</h1> : todos.map(todo=><Todo key={todo.id} todo={todo}/>)
                }              
            </div>
        </div>
    );
};

export default Todos;