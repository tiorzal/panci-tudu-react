import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import { Provider } from 'react-redux'


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
}

//reducer
const reducer = (state = initState, action) => {
  return state
}

const store = createStore(reducer)

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
