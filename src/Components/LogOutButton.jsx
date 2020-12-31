import React from 'react'
import {useHistory} from 'react-router-dom'

export default function LogOutButton() {

  const history = useHistory()

  function doLogOut(e){
    e.preventDefault();
    localStorage.clear();
    history.push('/login')
  } 

  return (
    <div>
      <button className="btn btn-warning" onClick={(e)=> doLogOut(e)}>logout</button>
    </div>
  )
}
