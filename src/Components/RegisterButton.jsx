import React from 'react'
import {useHistory} from 'react-router-dom'

export default function RegisterButton(props) {

  const history = useHistory()

  function goToRegister(e){
    e.preventDefault();
    history.push('/register')
  } 

  return (
    <div>
      <button className="btn btn-primary" onClick={(e)=> goToRegister(e)}>Register</button>
    </div>
  )
}
