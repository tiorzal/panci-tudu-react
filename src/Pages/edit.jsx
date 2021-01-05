// import React, {useState} from 'react'
import React, { Component } from 'react';
// import { useParams, Link } from 'react-router-dom'
import axios from '../config/axiosinst'

export default class Edit extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      todo: {
        tittle: '',
        description: '',
        due_date: ''
      }
    }
    this.getTodoById = this.getTodoById.bind(this)
    this.doEdit = this.doEdit.bind(this)
  }

  componentDidMount(){
    this.getTodoById()
  }

  getTodoById(){
    axios({
      url: `todos/${this.props.match.params.id}`,
      method: 'get',
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
      .then(({data})=> {
        this.setState({
          ...this.state,
          todo: data
        })
      })
      // .catch(err => {
      //   console.log(err); 
      // })
  }

  doEdit(e){
    e.preventDefault()
    const payload = {
      tittle: e.target[0].value,
      description: e.target[1].value,
      due_date: e.target[2].value
    }
    // console.log(payload);
    axios({
      url: `todos/${this.props.match.params.id}`,
      method: 'put',
      headers: {
        access_token: localStorage.getItem('access_token')
      },
      data: payload
    })
      .then(_ => {
        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err);
      })
  }

  render (){
    return(
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="card col-6">
            <form onSubmit={ (e) => this.doEdit(e)}>
              <div className="form-group mb-2">
                <label className="form-label" htmlFor="">title</label>
                <input
                  className="form-control" 
                  type="text" 
                  value={this.state.todo.tittle} 
                  onChange={(e) => {this.setState({
                    ...this.state,
                      todo:{
                        ...this.state.todo, 
                        tittle: e.target.value
                        } 
                  })}}/>
              </div>
              <div className="form-group mb-2">
                <label className="form-label" htmlFor="">description</label>
                <input 
                  className="form-control" 
                  type="text" 
                  value={this.state.todo.description} 
                  onChange={(e) => {this.setState({
                    ...this.state,
                      todo:{
                        ...this.state.todo, 
                        description: e.target.value
                        } 
                  })}}/>
              </div>
              <div className="form-group mb-2">
                <label className="form-label" htmlFor="">due date</label>
                <input 
                  className="form-control" 
                  type="date" 
                  value={this.state.todo.due_date} 
                  onChange={(e) => {this.setState({
                    ...this.state,
                      todo:{
                        ...this.state.todo, 
                        description: e.target.value
                        } 
                  })}}/>
              </div>
              <div className="form-group">
                <input className="btn btn-primary" type="submit" value="edit"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
  
}

