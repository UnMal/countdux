import React, { useRef } from 'react';
import './todo.css';
import { useDispatch } from 'react-redux';
import { editTodo, updateTodo, terminerTodo, removeTodo } from '../../redux/actions/todosActions';

const Todo = ({todo}) => {
    const edit = useRef();
    const dispatch = useDispatch();
    const handleEdit = (e)=>{
        e.preventDefault();
        dispatch(editTodo(todo.id));
    }
    const handleDelete = (e)=>{
        e.preventDefault();
        dispatch(removeTodo(todo.id));
    }
    const handleUpdate = (e)=> {
        e.preventDefault();
        if(edit.current[0].value!==""){
            const editedData = {
                id: todo.id,
                libelle: edit.current[0].value
            };
            dispatch(updateTodo(editedData));
            edit.current.reset();
        }        
    }
    const handleTerminer = (e)=> {
        e.preventDefault();
        dispatch(terminerTodo(todo.id));
    }
    return (
        <div className='todo'>
            <h3 className={todo.state?'line':''}>{todo.libelle}</h3>
            <button onClick={(e)=>handleEdit(e)}  disabled={todo.state===1}>{todo.edit?'Annuler':'Modifier'}</button>
            <button onClick={(e)=>handleTerminer(e)} disabled={todo.state===1}>Terminer</button>
            <button onClick={(e)=>handleDelete(e)}>Supprimer</button>
            {todo.edit?
                <form ref={edit}>
                    <input placeholder='Updated value' required/>
                    <button onClick={(e)=>handleUpdate(e)}>Mettre a Jour</button>
                </form>
            :null}
        </div>
    );
};

export default Todo;