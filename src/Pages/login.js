import React, { Component } from 'react'

export default class LoginPage extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return(
      <div>
        ini login page
      </div>
    )
  }
}