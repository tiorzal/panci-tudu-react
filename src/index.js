import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
// import axios from './config/axiosinst'

//init state
const initState = {
  todos: [
    {
      id: 1,
      title: "pertamax",
      status: false,
    },
    {
      id: 2,
      title: "keduax",
      status: false,
    },
    {
      id: 3,
      title: "ketigax",
      status: true,
    },
  ],
  loginStatus: false
}

//reducer
const reducer = (state = initState, action) => {
  // console.log('hit reducer');
  switch (action.type) {
    case 'ADD_TODO':
      console.log(action.payload);
      return {
        ...state,
        todos:[
          ...state.todos,
          { id: state.todos[state.todos.length - 1].id + 1 , title: action.payload, status: false }
        ]
      }
    case 'DONE_TODO':
      // console.log('hit', action.payload.id);
      const newTodo = state.todos
      newTodo.forEach(e => {
        if(e.id === action.payload.id){
          e.status = true;
        }
      })
      return { todos: newTodo }
    case 'LOGIN':
      return {
        ...state,
        loginStatus: true
      }
    default:
      break;
  }
  return state
}

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
