import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

export default class LoginPage extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: ''
    }
  }
  
  login (e) {
    e.preventDefault()
    console.log(this.state.email, this.state.password);
    localStorage.setItem('access_token', this.state.email)
    document.getElementById("loginForm").reset()
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="card col-6 mx-auto p-2" style={{ marginTop: "20vh"}}>
            <form id="loginForm" className="text-start">
              <label className="form-label">email</label>
              <input
                className="form-control"
                type="email"
                onChange={ (e) => {
                  this.setState({email: e.target.value})
                }}
              ></input>
              <label className="form-label">password</label>
              <input 
                className="form-control" 
                type="password"
                onChange={ (e) => {
                  this.setState({password: e.target.value})
                }}
              ></input>
            </form>
            <div className="card-footer">
              <button 
                className="btn btn-primary"
                onClick={(e)=> this.login(e)}
              >login</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}