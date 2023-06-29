import * as actionType from '../constants/todosConstants';

const initialState = {
    todos: []
};

export default function todosReducer(state=initialState, action) {
    // localStorage.clear()
    switch (action.type) {
        case actionType.FETCH_TODOS:
            return state = {
                todos: action.payload
            };
        case actionType.ADD_TODO:       
            return state = {
                todos: [action.payload, ...state.todos],
            };
        case actionType.EDIT_TODO:
            const todos = state.todos.map((todo) => {
                if (todo.id===action.payload) {
                    return {
                        ...todo,
                        edit: !todo.edit
                    };
                }else {
                    return todo;
                }
            });
            return state = {
                ...state,
                todos
            };
        case actionType.UPDATE_TODO:
            const updatedTodos = state.todos.map((todo) => {
                if (todo.id===action.payload.id) {
                    return {
                        ...todo,
                        libelle: action.payload.libelle,
                        edit: !todo.edit
                    };
                }else {
                    return todo;
                }
            });
            return state = {
                ...state,
                todos: updatedTodos
            };
        case actionType.END_TODO:
            const endedTodos = state.todos.map((todo) => {
                if (todo.id===action.payload) {
                    return {
                        ...todo,
                        state: 1,
                        edit: false
                    };
                }else {
                    return todo;
                }
            });
            return state = {
                ...state,
                todos: endedTodos
            };
        case actionType.REMOVE_TODO:
            const filteredTodos = state.todos.filter((todo) => todo.id !== action.payload);
            return state = {
                ...state,
                todos: filteredTodos
            };
        default:
            return state;
    }
}