import './App.css';
import Navbar from './Components/Navbar'
import LoginPage from './Pages/login'
import MainPage from './Pages/mainpage'
import EditPage from './Pages/edit'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
// import MwGuard from './MwGuard'

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(()=> {
    console.log('rendering');
    if(localStorage.getItem('access_token')) setIsLoggedIn(true)
    console.log(isLoggedIn);
  }, [isLoggedIn])

  return (
    <div className="App">
      <p>ini ceritanya tudu</p>
        <Router>
          <Navbar setIsLoggedIn={(status) => setIsLoggedIn(status)} isLoggedIn={isLoggedIn}/>
          <Switch>
            <Route path="/" exact component={MainPage} auth={isLoggedIn}/>
            <Route path="/login" exact component={LoginPage} setIsLoggedIn={(status) => setIsLoggedIn(status)} />
            <Route path="/edit/:id" exact component={EditPage}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
