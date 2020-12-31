import React from 'react'
import axios from '../config/axiosinst'

class doneTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  doDelete(){
    // console.log(this.props.todo.id);
    axios({
      url: `todos/${this.props.todo.id}`,
      method: 'delete',
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
      .then(_ => {
        this.props.rootRerender()
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        { this.props.todo.tittle} <button className="btn btn-error" onClick={ ()=> this.doDelete()}>x</button>
      </div>
    );
  }
}


export default doneTodo;