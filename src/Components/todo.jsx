import React, { Component } from "react";
import TodoButton from '../Components/todoButton'

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
        <TodoButton todoId={this.props.todo.id}/>
      </div>
    )
  }
}