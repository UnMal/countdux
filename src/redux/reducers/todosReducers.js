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
            state = {
                todos: action.payload
            }
            alert("okay")
            return state;
        case actionType.EDIT_TODO:
            return state.todos.map((todo) => {
                if (todo.id===action.payload) {
                    return {
                        ...todo,
                        edit: !todo.edit
                    };
                }else {
                    return todo;
                }
            });
        case actionType.UPDATE_TODO:
            return state.todos.map((todo) => {
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
        case actionType.END_TODO:
            return state.todos.map((todo) => {
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
        case actionType.REMOVE_TODO:
            return state.todos.filter((todo) => todo.id !== action.payload);
        default:
            return state;
    }
}