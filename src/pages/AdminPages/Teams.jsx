import styles from './MenuPages.module.css'
import modalStyles from "../../components/Modal/Modal.module.css";
import List from "../../components/List/List";
import Text from "../../components/Text/Text";
import {Add, DeleteForever, ExpandMore, LocationCity, People, Person} from "@material-ui/icons";
import DoubleLineText from "../../components/DoubleLineText/DoubleLineText";
import Button from "../../components/Button/Button";
import Redirect from "../../components/Redirect/Redirect";
import {Route, useHistory, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Modal from "../../components/Modal/Modal";
import Input from "../../components/Input/Input";
import {del, post} from "../../api/RestApi";
import {putExpiringEmployer} from "../../api/EmployersApi";

const TeamsList = ({data, setData}) => {
    const history = useHistory();
    const labels = ['Nr', 'Nazwa', 'Placówka', 'Brygadzista', '']
    const sizing = '0.2fr 1fr 1fr 1fr 120px'
    const deleteMethod = (id) => {
        const putExpiringEmployerAsync = async () => {
            try {
                await del('http://localhost:8080/api/teams/'+id, sessionStorage.getItem('JWT'))
                setData(data.filter((team) => team.id !== id))
            }catch (exception){

            }
        }
        putExpiringEmployerAsync()
    }
    const template = (nr, rowData) => {
        return [
            <Text content={nr} variant='bold'/>,
            <Text content={rowData.name}/>,
            <Text content={rowData.place}/>,
            <DoubleLineText firstLine={rowData.leader.name + rowData.leader.lastName} secondLine={rowData.leader.phone}/>,
            <div className='Center'>
                <Button icon={<DeleteForever fontSize='small'/>} text='Usuń' onClick={()=>deleteMethod(rowData.id)}/>
            </div>
        ]
    }
    const getTeamEmployers = (nr) => {
        history.push("/admin/teams/"+nr);
        setActive(nr)
    }
    const [active, setActive] = useState(0)
    return(
        <List labels={labels} sizing={sizing} template={template} data={data} onClick={getTeamEmployers} active={active} cursor='pointer'/>
    )
}

const TeamEmployersList = ({data}) => {
    const {teamId} = useParams()

    const labels = ['Nr', 'Imię i Nazwisko', 'Wiek', 'Stanowisko', 'Wynagrodzenie']
    const sizing = '0.2fr 1.1fr 0.5fr 0.8fr 0.8fr'
    const template = (nr, rowData) => {
        return [
            <Text content={nr} variant='bold'/>,
            <Text content={rowData.name + ' ' + rowData.lastName}/>,
            <Text content={rowData.age + ' lat'}/>,
            <Text content={rowData.position}/>,
            <Text variant='special' content={rowData.salary + ' PLN'}/>,
        ]
    }
    return(
        <List labels={labels} sizing={sizing} template={template} data={data[teamId].employers}/>
    )
}

const Teams = ({data, setData}) => {

    /*const data = [{
        name: 'Backend Dev',
        place: 'Kraków',
        leader: 'Jan Kowalski',
        contact: '735-167-327',
        employers: [
            {
                name: 'Norbert',
                lastName: 'Baran',
                age: 22,
                position: 'Prezes',
                salary: 10000
            },
            {
                name: 'Bob',
                lastName: 'Smith',
                age: 33,
                position: 'Spawacz',
                salary: 10000
            }
        ]
    },{
        name: 'Frontend Dev',
        place: 'Warszawa',
        leader: 'John Smith',
        contact: '735-167-327',
        employers: [
            {
                name: 'Gorge',
                lastName: 'Smith',
                age: 45,
                position: 'Spawacz',
                salary: 10000
            }
        ]
    }]*/

    /*const getEmployers = (teamId) => {
        return data.filter((employer) => employer.id === teamId)[0].employers
    }*/

    const [teamNameInput, setTeamNameInput] = useState("")
    const [cityInput, setCityInput] = useState("")
    const [usernameInput, setUsernameInput] = useState("")
    const modalInputs = [
        <Input background='white' placeholder='Nazwa teamu' icon={<People/>} inputState={teamNameInput} setInputState={setTeamNameInput}/>,
        <Input background='white' placeholder='Miejscowość' icon={<LocationCity/>} inputState={cityInput} setInputState={setCityInput}/>,
        <Input background='white' placeholder='Brygadzista(nazwa użytkownika)' icon={<Person/>} inputState={usernameInput} setInputState={setUsernameInput}/>,
    ]
    const modalAdd = () => {
        const postMethod = async () => {
            try {
                const dto = {
                    name: teamNameInput,
                    place: cityInput,
                    leader: {
                        username: usernameInput
                    }
                }
                const team = await post('http://localhost:8080/api/teams', dto, sessionStorage.getItem("JWT"))
                setData([...data, team])
            }catch (exception){

            }
        }
        if(validation === false)
            alert("Wszystkie pola są obowiązkowe")
        else
            postMethod()
    }
    const modalCleaning = () => {
        setTeamNameInput("")
        setCityInput("")
        setUsernameInput("")
    }

    useEffect(()=>{
        if(teamNameInput === "" || cityInput === "" || usernameInput === ""){
            setValidation(false)
        } else {
            setValidation(true)
        }
    },[teamNameInput, cityInput, usernameInput])

    const openDialog = () =>{
        const modal = document.getElementById('modal')
        modal.classList.add(modalStyles.ModalVisible)
    }
    const [validation, setValidation] = useState(false)
    return(
        <div className={styles.HorizontalSplit2}>
            <div>
                <p className={styles.Header}>Teamy</p>
                <TeamsList data={data} setData={setData}/>
                <Modal title='Dodaj produkt' inputs={modalInputs} onClick={modalAdd} onCleaning={modalCleaning} validate={validation} setValidate={setValidation}/>
                <div className='Right'>
                    <Button icon={<Add fontSize='small'/>} text='Dodaj' onClick={() => openDialog()}/>
                </div>
            </div>
            <div>
                <p className={styles.Header}>Członkowie teamu</p>
                {/*<Route path={'/admin/teams/:teamId'} render={()=>(<TeamEmployersList data={data}/>)}/>*/}
            </div>
        </div>
    )
}

export default Teams