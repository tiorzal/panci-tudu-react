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
import React, {useState} from 'react'
// import MwGuard from './MwGuard'

function App() {
  


  const [isLoggedIn, setIsLoggedIn] = useState(false)

  console.log(isLoggedIn);
  return (
    <div className="App">
      <p>ini ceritanya tudu</p>
        <Router>
          <Navbar setIsLoggedIn={(status) => setIsLoggedIn(status)}/>
          <Switch>
            <Route path="/" exact component={MainPage} auth={isLoggedIn}/>
            <Route path="/login" exact component={LoginPage} setIsLoggedIn={(status) => setIsLoggedIn(status)} />
              {/* <LoginPage setIsLoggedIn={(status) => setIsLoggedIn(status)}/> */}
            {/* </Route> */}
            <Route path="/edit/:id" exact>
              <EditPage/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
