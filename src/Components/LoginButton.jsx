import React from 'react'
import {useHistory} from 'react-router-dom'

export default function LoginButton(props) {

  const history = useHistory()

  function goToLogin(e){
    e.preventDefault();
    history.push('/login')
  } 

  return (
    <div>
      <button className="btn btn-primary" onClick={(e)=> goToLogin(e)}>login</button>
    </div>
  )
}
