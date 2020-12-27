import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

export default class Navbar extends Component {


  render(){
    let button
    if(localStorage.getItem('access_token')){
      button = <button className="btn btn-primary">logout</button>
    } else {
      button = <button className="btn btn-warning">login</button>
    }
    return(
      <nav className="navbar navbar-expand-md navbar-light bg-primary">
        <div className="container-fluid">
          <div className="navbar-brand ml-auto">Panci</div>
          {button}
        </div>
      </nav>
    )
  }
}