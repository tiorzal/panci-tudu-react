import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { useHistory } from "react-router-dom";

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

  doLogout(e){
    e.preventDefault();
    localStorage.clear()
    this.props.history.push('/login')
  }

  render(){
    // console.log(this.props);
    let button
    if(this.state.loginStatus){
      button = <button className="btn btn-primary" onClick={(e) => this.doLogout(e)}>logout</button>
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

const mapStateToProps = (state) => {
  return {
    loginStatus: state.loginStatus
  }
}

export default connect(mapStateToProps)(Navbar)