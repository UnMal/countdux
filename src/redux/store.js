import { combineReducers, configureStore } from "@reduxjs/toolkit";
import countReducer from './reducers/countReducers';
import todosReducers from './reducers/todosReducers';

const reducers = combineReducers({
    countReducer,
    todosReducers,
});

const store = configureStore({
    reducer: reducers,
    devTools: true
});

export default store;