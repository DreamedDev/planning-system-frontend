import {useHistory, useParams} from "react-router-dom";
import {del, get} from "../../../api/RestApi";
import Text from "../../../components/Text/Text";
import DoubleLineText from "../../../components/DoubleLineText/DoubleLineText";
import Button from "../../../components/Button/Button";
import {DeleteForever} from "@material-ui/icons";
import {useEffect, useState} from "react";
import List from "../../../components/List/List";
import {getTeamEmployers} from "./Methods";
import {useDispatch, useSelector} from "react-redux";
import {setTeamEmployers} from "../../../redux/actions";

export const TeamsList = ({data, setData}) => {
    const teamEmployers = useSelector(state => state.teamEmployers)
    const dispatch = useDispatch();
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
    const getTeamEmployerList = (nr) => {
        //history.push("/admin/teams/"+data[nr].id);
        setActive(nr)
        getTeamEmployers(data[nr].id, teamEmployers, (employers)=>dispatch(setTeamEmployers(employers)))
    }
    const [active, setActive] = useState(-1)
    return(
        <List labels={labels} sizing={sizing} template={template} data={data} onClick={getTeamEmployerList} active={active} cursor='pointer'/>
    )
}

export const TeamEmployersList = () => {
    const teamEmployers = useSelector(state => state.teamEmployers)
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
        <List labels={labels} sizing={sizing} template={template} data={teamEmployers}/>
    )
}