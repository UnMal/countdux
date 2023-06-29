import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// redux imports
import { Provider } from "react-redux";
// compoments imports
import  Counter  from "./components/counter/counter";
// store import
import store from "./redux/store";
import Todos from './components/todos/todos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Counter />
      <Todos/>
    </React.StrictMode>
  </Provider>
);

reportWebVitals();