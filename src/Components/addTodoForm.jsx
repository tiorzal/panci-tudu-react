import React, { Component } from 'react'
// import { connect } from 'react-redux'
import axios from '../config/axiosinst'

export class addTodoForm extends Component {
  constructor(props){
    super(props);
    this.state= {}
  }

  doAddTodo(e){
    e.preventDefault()
    const payload = {
      tittle: e.target[0].value,
      description: e.target[1].value,
      due_date: e.target[2].value,
      status: 'not finished'
    }
    console.log(payload);
    axios({
      url: 'todos',
      method:'post',
      headers:{
        access_token: localStorage.getItem('access_token'),
      },
      data: payload
    })
      .then( response => {
        console.log(response);
        // rootRerender={this.rerender}
        this.props.rootRerender()
        e.target.reset()
      })
      .catch( err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="">
        <form onSubmit={ e => this.doAddTodo(e)}>
          <div className="mb-2 text-start">
            <label className="form-label" htmlFor="tittle">title</label>
            <input className="form-control" type="text" name="tittle"/>
          </div>
          <div className="mb-2 text-start">
            <label className="form-label" htmlFor="description">description</label>
            <input className="form-control" type="text" name="description"/>
          </div>
          <div className="mb-2 text-start">
            <label className="form-label" htmlFor="date">due date</label>
            <input className="form-control" type="date" name="date"/>
          </div>
          <input type="submit" value="add"/>
        </form>
      </div>
    )
  }
}


export default addTodoForm
