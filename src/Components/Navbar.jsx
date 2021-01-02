import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { useHistory } from "react-router-dom";
import LogOutButton from '../Components/LogOutButton'
import LoginButton from '../Components/LoginButton'

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      loginStatus: false
    }
    
  }

  // componentDidMount(){
  //   if(localStorage.getItem('access_token')){
  //     this.setState({loginStatus: true})
  //   }
  // }

  // shouldComponentUpdate(){
  //   if(localStorage.getItem('access_token')){
  //     this.setState({loginStatus: true})
  //   }
  // }

  componentDidMount(){
    if(localStorage.getItem('access_token')){
      this.setState({loginStatus: true})
      // console.log('ada');
      this.forceUpdate();
    }
  }

  // doLogout(e){
  //   e.preventDefault();
  //   // localStorage.clear()
  //   // this.props.logoutRouteHandler()
  //   // this.props.history.push('/login')
  //   this.props.setIsLoggedIn(false)
  // }

  render(){
    // console.log(this.props);
    let button
    if(this.props.isLoggedIn){
      // button = <button className="btn btn-primary" onClick={(e) => this.doLogout(e)}>logout</button>
      button = <LogOutButton setIsLoggedIn={(status) => this.props.setIsLoggedIn(status)}/>
    } else {
      button = <LoginButton/>
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

// const mapStateToProps = (state) => {
//   return {
//     loginStatus: state.loginStatus
//   }
// }

export default connect()(Navbar)