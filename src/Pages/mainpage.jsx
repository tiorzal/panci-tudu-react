import React, { Component } from "react";
import Todo from '../Components/todo'

export default class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          title: "pertamax",
          status: false,
        },
        {
          title: "keduax",
          status: false,
        },
        {
          title: "ketigax",
          status: true,
        },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>todo list</h2>
          {this.state.todos.map((e, index) => {
            return <Todo key={index} todo={e} todoKey={index}/>;
          })}
        </div>
      </div>
    );
  }
}
