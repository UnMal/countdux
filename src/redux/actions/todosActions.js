import * as actionType from '../constants/todosConstants';

export const fetchTodos = () => (dispatch) => { 
    let todos = [];
    if(localStorage.getItem('todos')===null){
        localStorage.setItem('todos', JSON.stringify(todos));
    }else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    dispatch({
        type: actionType.FETCH_TODOS,
        payload: todos
    });
}

export const addTodo = (todoData) => (dispatch) => {
    let todos = JSON.parse(localStorage.getItem('todos'));
    todos = [todoData, ...todos];
    localStorage.setItem('todos', JSON.stringify(todos));
    dispatch({
        type: actionType.ADD_TODO,
        payload: todos
    });
}

export const editTodo = (id) => (dispatch) => {
    dispatch({
        type: actionType.EDIT_TODO,
        payload: id
    });
}

export const updateTodo = (editedData) => (dispatch) => {
    dispatch({
        type: actionType.UPDATE_TODO,
        payload: editedData
    });
}

export const terminerTodo = (id) => (dispatch) => {
    dispatch({
        type: actionType.END_TODO,
        payload: id
    });
}

export const removeTodo = (id) => (dispatch) => {
    dispatch({
        type: actionType.REMOVE_TODO,
        payload: id
    });
}