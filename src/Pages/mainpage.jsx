import React, { Component } from "react";
import Todo from '../Components/todo'
import DoneTodo from '../Components/doneTodo'

export default class MainPage extends Component {
  constructor() {
    super();
    this.state = {
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
    };
  }

  falseTodo () {
    return this.state.todos.filter( e => !e.status)
  }

  trueTodo () {
    return this.state.todos.filter( e => e.status)
  }

  render() {
    return (
      <div className="container">
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
