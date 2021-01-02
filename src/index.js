import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
// import axios from './config/axiosinst'
import store from './store/store'

//init state
// const initState = {
//   todos: [],
//   loginStatus: false
// }

//reducer
// const reducer = (state = initState, action) => {
//   // console.log('hit reducer');s
//   switch (action.type) {
//     case 'SET_TODOS':
//       console.log('sampe');
//       return {
//         ...state,
//         todos: action.payload
//       }
//     case 'FETCH_TODOS':
//       fetchTodos()
//       break;
//     default:
//       break;
//   }
//   return state
// }



// const store = createStore(reducer, applyMiddleware(thunk))

// function fetchTodos () {
//   axios({
//     url: 'todos',
//     method: 'get',
//     headers: {
//       access_token: localStorage.getItem('access_token')
//     }
//   })
//     .then(({ data }) => {
//       store.dispatch({type: 'SET_TODOS', payload: data})
//     })
//     .catch(err => {
//       console.log(err);
//     })
// }

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
