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
        {console.log(this.props)}
        {this.props.todo.tittle}
        <div className="d-flex justify-content-center">
          <TodoButton todoId={this.props.todo.id} rootRerender={this.props.rootRerender}/>
          <button className="btn btn-secondary" onClick={(e) => this.goToEdit(e)}>edit</button>
        </div>
      </div>
    )
  }
}