import React, { Component } from 'react'
import axios from '../config/axiosinst'


export class register extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  doRegister(e){
    e.preventDefault();
    const payload = {
      email: e.target[0].value,
      password: e.target[1].value
    }
    console.log(payload);
    this.register(payload)
  }

  register(payload){
    axios({
      url: 'register',
      method: 'post',
      data: payload
    })
      .then(_=> {
        this.props.history.push('/login')
      })
      // .catch(err => {
      //   console.log(err);
      // })
  }

  render() {
    return (
      <div>
        <div className="row d-flex justify-content-center" style={{ marginTop: "20vh"}}>
          <form className="card col-4 text-start" onSubmit={(e)=> this.doRegister(e)}>
            <div className="form-group">
              <label htmlFor="" className="form-label">email</label>
              <input type="email" className="form-control" name="email"/>
            </div>
            <div className="form-group">
              <label htmlFor="" className="form-label">password</label>
              <input type="password" className="form-control" name="password"/>
            </div>
            <div className="text-center m-2">
              <input className="btn btn-primary" type="submit" value="register" style={{width: "100px"}}/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default register
