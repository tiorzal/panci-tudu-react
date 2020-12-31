import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const LoginGuard = ({ component: Component, ...rest }) => {
  return(
    <Route {...rest} render={(props)=>(
      (localStorage.getItem('access_token'))
        ? <Redirect to= '/'/>
        : <Component {...props}/>
    )} />
  )
}

export default LoginGuard