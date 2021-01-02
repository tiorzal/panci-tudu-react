import './App.css';
import Navbar from './Components/Navbar'
import LoginPage from './Pages/login'
import MainPage from './Pages/mainpage'
import EditPage from './Pages/edit'
import RegisterPage from './Pages/register'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import MwGuard from './Guards/MwGuard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  


  const [isLoggedIn, setIsLoggedIn] = useState((localStorage.getItem('access_token')))
  // const [errors, setErrors] = useState([])

  function toastTrigger(obj){
    switch (obj.type) {
      case 'success':
        toast.success(obj.message, {
          position: toast.POSITION.TOP_CENTER
        });
        break;
      case 'error':
        toast.error(obj.message, {
          position: toast.POSITION.TOP_CENTER
        });
        break;
      default:
        break;
    }
  }

  useEffect(()=> {
    // console.log('rendering', localStorage.getItem('access_token'));
    if(localStorage.getItem('access_token')) setIsLoggedIn(true)
    // console.log(isLoggedIn);
  }, [isLoggedIn])

  return (
    <div className="App">
      <p>ini ceritanya tudu</p>
        <ToastContainer/>
        <Router>
          <Navbar setIsLoggedIn={(status) => setIsLoggedIn(status)} isLoggedIn={isLoggedIn}/>
          <Switch>
            <MwGuard path="/" exact component={MainPage}/>
            <MwGuard path="/edit/:id" exact component={EditPage}/>
            <Route path="/login" exact 
              render={(props)=> {
                if(localStorage.getItem('access_token')) return <Redirect to='/'/>
                return <LoginPage {...props} setIsLoggedIn={(status) => setIsLoggedIn(status)} toastTrigger={(obj)=>toastTrigger(obj)}/>
              }}/>
            <Route path="/register" exact render={(props) => {
              if(localStorage.getItem('access_token')) return <Redirect to='/'/>
              return <RegisterPage {...props}/>
            }}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
