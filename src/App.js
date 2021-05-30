import './App.css';
import Head from "./components/Head/Head";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AuthPage from "./components/Auth/AuthPage";
import Admin from "./components/Admin/Admin";

function App() {
  return (
    <div className='App'>
        <Router>
            <Route path='/auth' component={AuthPage}/>
            <Route path='/admin' component={Admin}/>
        </Router>
    </div>
  );
}

export default App;
