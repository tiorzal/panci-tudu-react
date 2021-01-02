import React, { Component } from "react";
import TodoButton from '../Components/todoButton'

export default class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  goToEdit(e){
    e.preventDefault()
    this.props.goEdit(this.props.todo.id)
  }

  render() {
    return(
      <div>
        {this.props.todo.tittle}
        <div className="d-flex justify-content-center">
          <button className="btn btn-secondary m-1" onClick={(e) => this.goToEdit(e)}>edit</button>
          <TodoButton todoId={this.props.todo.id} rootRerender={this.props.rootRerender}/>
        </div>
      </div>
    )
  }
}