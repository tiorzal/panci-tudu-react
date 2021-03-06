import React, { Component } from 'react'
import { connect } from "react-redux";
import axios from '../config/axiosinst'
import RegisterButton from '../Components/RegisterButton'


class LoginPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.login = this.login.bind(this)
  }
  
  login (e) {
    e.preventDefault()
    // console.log(this.state.email);
    // localStorage.setItem('access_token', this.state.email)
    
    console.log(this.state.email, this.state.password);
    axios({
      url: 'login',
      method: 'post',
      data: {
        email: this.state.email,
        password: this.state.password
      }
    })
      .then(({ data }) => {
        console.log(data);
        document.getElementById("loginForm").reset()
        localStorage.setItem('access_token', data.access_token)
        // this.props.login()
        this.props.setIsLoggedIn(true)
        this.props.toastTrigger({ type: 'success', message: `welcome ${this.state.email.split('@')[0]}`})
        this.props.history.push('/')
      })
  //     .catch(({response}) => {
  //       if(response){
  //         this.props.toastTrigger({ type: 'error', message: response.data})
  //       }
  //     })
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="card col-6 mx-auto mb-5 p-2" style={{ marginTop: "20vh"}}>
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
          <p>anak baru ?</p>
          <RegisterButton/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loginStatus: state.loginStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch({type: 'LOGIN'}) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)