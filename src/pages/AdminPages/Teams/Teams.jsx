import styles from '../MenuPages.module.css'
import {Add, People} from "@material-ui/icons";
import Button from "../../../components/Button/Button";
import {useEffect, useState} from "react";
import Modal, {openDialog} from "../../../components/Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {
    clearAllTeam,
    setTeamCity,
    setTeamEmployerUsername, setTeamEmployerValidation,
    setTeamName,
    setTeamUsername,
    setTeamValidation
} from "../../../redux/actions";
import {addEmployerToTeam, addTeam, getTeamModalInputs} from "./Methods";
import {TeamEmployersList, TeamsList} from "./List";
import {Route} from "react-router-dom";
import Input from "../../../components/Input/Input";

const Teams = ({data, setData}) => {
    const addTeam = useSelector(state => state.addTeam)
    const addTeamEmployer = useSelector(state => state.addTeamEmployer)
    const dispatch = useDispatch();
    const modalInputs = getTeamModalInputs(addTeam, (name)=>dispatch(setTeamName(name)), (city)=>dispatch(setTeamCity(city)), (username)=>dispatch(setTeamUsername(username)))
    const modalOnClick = () => addTeam(addTeam, data, setData)
    useEffect(()=>{
        if(addTeam.name === '' || addTeam.city === '' || addTeam.username === '')
            dispatch(setTeamValidation(false))
        else
            dispatch(setTeamValidation(true))
    }, [addTeam.name, addTeam.city, addTeam.username])
    const modal2Inputs = [<Input background='white' placeholder='Nazwa użytkownika' icon={<People/>} inputState={addTeamEmployer.name} setInputState={(username)=>dispatch(setTeamEmployerUsername(username))}/>]
    //const modal2OnClick = () => addEmployerToTeam()
    return(
        <div className={styles.HorizontalSplit2}>
            <div>
                <p className={styles.Header}>Teamy</p>
                <TeamsList data={data} setData={setData}/>
                <Modal title='Dodaj Team' inputs={modalInputs} onClick={modalOnClick} onCleaning={()=>dispatch(clearAllTeam())} validate={addTeam.validation} setValidate={(validation)=>dispatch(setTeamValidation(validation))}/>
                <div className='Right'>
                    <Button icon={<Add fontSize='small'/>} text='Dodaj' onClick={() => openDialog()}/>
                </div>
            </div>
            <div>
                <p className={styles.Header}>Członkowie teamu</p>
                {/*<Route path={'/admin/teams/:teamId'} render={()=>(<TeamEmployersList/>)}/>*/}
                <TeamEmployersList/>
                <Modal title='Dodaj Użytkownika' inputs={modal2Inputs} onClick={modalOnClick} onCleaning={()=>dispatch(setTeamEmployerUsername(''))} validate={addTeamEmployer.validation} setValidate={(validation)=>dispatch(setTeamEmployerValidation(validation))} id='modal2'/>
                <div className='Right'>
                    <Button icon={<Add fontSize='small'/>} text='Dodaj' onClick={() => openDialog('modal2')}/>
                </div>
            </div>
        </div>
    )
}

export default Teams