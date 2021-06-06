import {del, post} from "../../../api/RestApi";
import Input from "../../../components/Input/Input";
import {Search} from "@material-ui/icons";

export const getToolModalInputs = (addTool, setCategory, setName, setModel, setIdentityNo) => {
    return [
        <Input background='white' placeholder='Kategoria' icon={<Search/>} inputState={addTool.category} setInputState={setCategory}/>,
        <Input background='white' placeholder='Nazwa' icon={<Search/>} inputState={addTool.name} setInputState={setName}/>,
        <Input background='white' placeholder='Model' icon={<Search/>} inputState={addTool.model} setInputState={setModel}/>,
        <Input background='white' placeholder='Numer seryjny' icon={<Search/>} inputState={addTool.identityNo} setInputState={setIdentityNo}/>
    ]
}

export const saveTool = (addTool, data, setData) => {
    const postMethod = async () => {
        try {
            const dto = {
                category: addTool.category,
                name: addTool.name,
                model: addTool.model,
                identityNo: addTool.identityNo,
                notExpired: true
            }
            const tool = await post('http://localhost:8080/api/tools', dto, sessionStorage.getItem("JWT"))
            setData([...data, tool])
        }catch (exception){}
    }
    if(addTool.validation === false)
        alert("Wszystkie pola są obowiązkowe")
    else
        postMethod()
}

export const deleteTool = (id, data, setData) => {
    const deleteToolAsync = async () => {
        try {
            await del('http://localhost:8080/api/tools/'+id, sessionStorage.getItem('JWT'))
            setData(data.filter((team) => team.id !== id))
        }catch (exception){

        }
    }
    deleteToolAsync()
}