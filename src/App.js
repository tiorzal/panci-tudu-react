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

function App() {
  return (
    <div className="App">
      <Navbar/>
      <p>ini ceritanya tudu</p>
      <div className="container">
        <Router>
          <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/edit/:id" exact component={EditPage}/>
            <Route path="/login" exact component={LoginPage}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
