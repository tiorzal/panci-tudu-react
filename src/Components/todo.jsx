import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <div>
        {console.log(this.props)}
        {this.props.todo.title}
      </div>
    )
  }
}