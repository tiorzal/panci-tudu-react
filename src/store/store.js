import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from '../config/axiosinst'



const initState = {
  todos: []
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return {
        ...state,
        todos: action.payload
      }
    case 'FETCH_TODOS':
      fetchTodos()
      break;
    default:
      break;
  }
  return state
}



//store
const store = createStore( rootReducer, applyMiddleware(thunk))

//axios call
function fetchTodos () {
  axios({
    url: 'todos',
    method: 'get',
    headers: {
      access_token: localStorage.getItem('access_token')
    }
  })
    .then(({ data }) => {
      store.dispatch({type: 'SET_TODOS', payload: data})
    })
    .catch(err => {
      console.log(err);
    })
}

export default store
