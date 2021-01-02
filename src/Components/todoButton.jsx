// import axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from '../config/axiosinst'


export class todoButton extends Component {

  doneTodoHandler(e) {
    e.preventDefault();

    axios({
      url: `todos/${this.props.todoId}`,
      method: 'patch',
      headers: {
        access_token: localStorage.getItem('access_token')
      },
      data: {
        status: 'done'
      }
    })
      .then(response => {
        // console.log(response.data);
        this.props.rootRerender()
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    // console.log(this.props);
    return (
      <div className="m-1">
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
