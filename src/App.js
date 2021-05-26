import './App.css';
import Head from "./components/Head/Head";
import Menu from "./components/Menu/Menu";
import Body from "./components/Body/Body";
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
        <Head/>
        <Router>
            <Menu/>
            <Body/>
        </Router>
    </div>
  );
}

export default App;
