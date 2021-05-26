import styles from './Body.module.css'
import {Route} from 'react-router-dom'
import Employers from "../../pages/MenuPages/Employers";
import Teams from "../../pages/MenuPages/Teams";
import Tasks from "../../pages/MenuPages/Tasks";
import Tools from "../../pages/MenuPages/Tools";
import Materials from "../../pages/MenuPages/Materials";
import Reports from "../../pages/MenuPages/Reports";
import Products from "../../pages/MenuPages/Products";
import Finance from "../../pages/MenuPages/Finance";
import Analytics from "../../pages/MenuPages/Analytics";

const Body = () => {
    return(
        <div className={styles.Body}>
            <Route path='/employers' component={Employers}/>
            <Route path='/teams' component={Teams}/>
            <Route path='/tasks' component={Tasks}/>
            <Route path='/tools' component={Tools}/>
            <Route path='/materials' component={Materials}/>
            <Route path='/reports' component={Reports}/>
            <Route path='/products' component={Products}/>
            <Route path='/finance' component={Finance}/>
            <Route path='/analitics' component={Analytics}/>
        </div>
    )
}

export default Body