import React, { Component } from "react";
import Todo from '../Components/todo'
import DoneTodo from '../Components/doneTodo'
import { connect } from 'react-redux'

class MainPage extends Component {


  falseTodo () {
    return this.props.newTodos.filter( e => !e.status)
  }

  trueTodo () {
    return this.props.newTodos.filter( e => e.status)
  }

  addTodo (e) {
    e.preventDefault()
    console.log(e.target[0].value);
    this.props.addTodo(e.target[0].value);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={(e) => this.addTodo(e)}>
            <input type="text" name="todo"/>
            <input type="submit" value="add"/>
          </form>

        </div>
        <div className="row">
          <div className="col-6">
            <h2>todo list</h2>
            {this.falseTodo().map((e) => {
              return <Todo key={e.id} todo={e}/>;
            })}
          </div>
          <div className="col-6">
          <h2>done todo list</h2>
            {this.trueTodo().map((e) => {
              return <DoneTodo key={e.id} todo={e}/>;
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