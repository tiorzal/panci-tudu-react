import React, { Component } from "react";
import Todo from '../Components/todo'
import DoneTodo from '../Components/doneTodo'
import { connect } from 'react-redux'
import axios from '../config/axiosinst'
import AddTodoForm from '../Components/addTodoForm'
// import NavBar from '../Components/Navbar'


class MainPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      todos: [],
      apiTodos: []
    }
    this.rerender = this.rerender.bind(this)
    this.editRouteHandler = this.editRouteHandler.bind(this)
  }

  editRouteHandler(id){
    this.props.history.push(`/edit/${id}`)
  }

  logoutRouteHandler(){
    this.props.history.push('/login')
  }

  rerender () {
    // console.log('masuk');
    // this.fetchTodos();
    this.props.fetchTodosRedux()
    this.forceUpdate();
  }

  componentDidMount(){
    // this.fetchTodos()
    this.props.fetchTodosRedux()
  }

  fetchTodos () {
    axios({
      url: 'todos',
      method: 'get',
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
      .then(({ data }) => {
        this.setState({
          ...this.state,
          apiTodos: data
        })
        this.props.setTodo(data)
      })
      .catch(err => {
        console.log(err);
      })
  }

  falseTodo () {
    // return this.props.newTodos.filter( e => !e.status)
    // return this.state.apiTodos.filter(e => e.status === 'not finished')
    return this.props.newTodos.filter(e => e.status === 'not finished')

  }

  trueTodo () {
    // return this.props.newTodos.filter( e => e.status)
    // return this.state.apiTodos.filter(e => e.status !== 'not finished')
    return this.props.newTodos.filter(e => e.status !== 'not finished')

  }

  addTodo (e) {
    e.preventDefault()
    console.log(e.target[0].value);
    this.props.addTodo(e.target[0].value);
    e.target.reset()
  }

  

  render() {
    return (
      <div>
        {this.props.newTodos.length}
        <div className="container">
          <div className="row mt-3">
            <AddTodoForm rootRerender={this.rerender}/>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <h2>todo list</h2>
              {this.falseTodo().map((e) => {
                return <Todo key={e.id} todo={e} rootRerender={this.rerender} goEdit={this.editRouteHandler}/>;
              })}
            </div>
            <div className="col-6">
            <h2>done todo list</h2>
              {this.trueTodo().map((e) => {
                return <DoneTodo key={e.id} todo={e} rootRerender={this.rerender}/>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newTodos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTodo: (payload) => dispatch({type: 'SET_TODOS', payload}),
    fetchTodosRedux: () => dispatch({type: 'FETCH_TODOS'}) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)