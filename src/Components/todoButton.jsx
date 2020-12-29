import React, { Component } from 'react'
import { connect } from 'react-redux'


export class todoButton extends Component {

  doneTodoHandler(e) {
    e.preventDefault();
    const payload = {
      id: this.props.todoId
    }
    // console.log(payload);
    this.props.doneTodo(payload)
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <button className="btn btn-primary" onClick={(e) => this.doneTodoHandler(e)}>done</button>
      </div>
    )
  }
}



const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => {
  return {
    doneTodo: (payload) => dispatch({type: 'DONE_TODO', payload}) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(todoButton)
