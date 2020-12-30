import React, { Component } from "react";
import Todo from '../Components/todo'
import DoneTodo from '../Components/doneTodo'
import { connect } from 'react-redux'
import axios from '../config/axiosinst'
import AddTodoForm from '../Components/addTodoForm'


class MainPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      todos: [],
      apiTodos: []
    }
    this.rerender = this.rerender.bind(this)
  }

  rerender () {
    console.log('masuk');
    this.fetchTodos();
    this.forceUpdate();
  }

  componentDidMount(){
    this.fetchTodos()
  }

  // componentDidUpdate(){
  //   this.fetchTodos()
  // }

  fetchTodos () {
    axios({
      url: 'todos',
      method: 'get',
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
      .then(({ data }) => {
        console.log(data);
        this.setState({
          ...this.state,
          apiTodos: data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  falseTodo () {
    // return this.props.newTodos.filter( e => !e.status)
    return this.state.apiTodos.filter(e => e.status === 'not finished')
  }

  trueTodo () {
    // return this.props.newTodos.filter( e => e.status)
    return this.state.apiTodos.filter(e => e.status !== 'not finished')
  }

  addTodo (e) {
    e.preventDefault()
    console.log(e.target[0].value);
    this.props.addTodo(e.target[0].value);
    e.target.reset()
  }

  

  render() {
    return (
      <div className="container">
        <div className="row mt-3">
          <AddTodoForm rootRerender={this.rerender}/>
        </div>
        <div className="row mt-3">
          <form onSubmit={(e) => this.addTodo(e)}>
            <input type="text" name="todo"/>
            <input type="submit" value="add"/>
          </form>

        </div>
        <div className="row mt-3">
          <div className="col-6">
            <h2>todo list</h2>
            {this.falseTodo().map((e) => {
              return <Todo key={e.id} todo={e} rootRerender={this.rerender}/>;
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
    addTodo: (payload) => dispatch({type: 'ADD_TODO', payload}) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)