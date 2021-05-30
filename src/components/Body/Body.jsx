import styles from './Body.module.css'
import {Route} from 'react-router-dom'
import Employers from "../../pages/AdminPages/Employers";
import Teams from "../../pages/AdminPages/Teams";
import Tasks from "../../pages/AdminPages/Tasks";
import Tools from "../../pages/AdminPages/Tools";
import Materials from "../../pages/AdminPages/Materials";
import Reports from "../../pages/AdminPages/Reports";
import Products from "../../pages/AdminPages/Products";
import Finance from "../../pages/AdminPages/Finance";
import Analytics from "../../pages/AdminPages/Analytics";
import {useEffect, useState} from "react";
import {getEmployers} from "../../api/EmployersApi";
import Redirect from "../Redirect/Redirect";
import {get} from "../../api/RestApi";

const Body = () => {

    const [employersDataActive, setEmployersDataActive] = useState([])
    const [employersDataArchival, setEmployersDataArchival] = useState([])

    const [teamsData, setTeamsData] = useState([])

    const getInitData = () => {
        const getInitDataAcync = async () => {
            try {
                const initEmployersDataActive = await getEmployers(sessionStorage.getItem("JWT"), true)
                setEmployersDataActive(initEmployersDataActive)
                const initEmployersDataArchival = await getEmployers(sessionStorage.getItem("JWT"), false)
                setEmployersDataArchival(initEmployersDataArchival)

                const initTeamsData = await get('http://localhost:8080/api/teams', sessionStorage.getItem("JWT"))
                setTeamsData(initTeamsData)
            }catch (exception){

            }
        }
        getInitDataAcync()
    }

    useEffect(()=>{
        getInitData()
    },[])

    return(
        <div className={styles.Body}>
            <Route path='/admin/employers' exact render={()=>(<Redirect to='/admin/employers/active'/>)}/>
            <Route path='/admin/employers/active' render={()=>(<Employers data={employersDataActive} setData={setEmployersDataActive} reversedData={employersDataArchival} setReversedData={setEmployersDataArchival}/>)} />
            <Route path='/admin/employers/archival' render={()=>(<Employers data={employersDataArchival} setData={setEmployersDataArchival} reversedData={employersDataActive} setReversedData={setEmployersDataActive}/>)} />
            <Route path='/admin/teams' exact render={()=>(<Redirect to='/admin/teams/0'/>)}/>
            <Route path='/admin/teams' render={()=>(<Teams data={teamsData} setData={setTeamsData}/>)}/>
            <Route path='/admin/tasks' component={Tasks}/>
            <Route path='/admin/tools' component={Tools}/>
            <Route path='/admin/materials' component={Materials}/>
            <Route path='/admin/reports' component={Reports}/>
            <Route path='/admin/products' component={Products}/>
            <Route path='/admin/finance' component={Finance}/>
            <Route path='/admin/analytics' component={Analytics}/>
        </div>
    )
}

export default Body