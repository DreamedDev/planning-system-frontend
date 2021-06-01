import Input from "../../../components/Input/Input";
import {LocationCity, People, Person} from "@material-ui/icons";
import {get, post, put} from "../../../api/RestApi";

export const getTeamModalInputs = (addTeam, setName, setCity, setUsername) => {
    return [
        <Input background='white' placeholder='Nazwa teamu' icon={<People/>} inputState={addTeam.name} setInputState={setName}/>,
        <Input background='white' placeholder='Miejscowość' icon={<LocationCity/>} inputState={addTeam.city} setInputState={setCity}/>,
        <Input background='white' placeholder='Brygadzista(nazwa użytkownika)' icon={<Person/>} inputState={addTeam.username} setInputState={setUsername}/>
    ]
}

export const addTeam = (addTeam, data, setData) => {
    const postMethod = async () => {
        try {
            const dto = {
                name: addTeam.name,
                place: addTeam.city,
                leader: {
                    username: addTeam.username
                }
            }
            const team = await post('http://localhost:8080/api/teams', dto, sessionStorage.getItem("JWT"))
            setData([...data, team])
        }catch (exception){}
    }
    if(addTeam.validation === false)
        alert("Wszystkie pola są obowiązkowe")
    else
        postMethod()
}

export const getTeamEmployers = (id, state, setState) => {
    const getMethod = async () => {
        try{
            const employers = await get('http://localhost:8080/api/employers?teamId='+id, sessionStorage.getItem("JWT"))
            console.log(employers)
            setState(employers)
        } catch (exception){}
    }
    getMethod()
    console.log(state)
}

export const addEmployerToTeam = (teamId, employerId) => {
    const putMethod = async () => {
        try{
            const dto = {
                id: employerId,
                team: {
                    id: teamId
                }
            }
            await put('http://localhost:8080/employers', dto, sessionStorage.getItem("JWT"))
        } catch (exception){}
    }
    putMethod()
}