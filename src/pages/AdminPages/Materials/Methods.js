import {del, post} from "../../../api/RestApi";
import Input from "../../../components/Input/Input";
import {Search} from "@material-ui/icons";

export const getMaterialModalInputs = (addMaterial, setCategory, setName, setSupplier, setCount, setMeasure) => {
    return [
        <Input background='white' placeholder='Kategoria' icon={<Search/>} inputState={addMaterial.category} setInputState={setCategory}/>,
        <Input background='white' placeholder='Nazwa' icon={<Search/>} inputState={addMaterial.name} setInputState={setName}/>,
        <Input background='white' placeholder='Dostawca' icon={<Search/>} inputState={addMaterial.supplier} setInputState={setSupplier}/>,
        <Input background='white' placeholder='Ilość' icon={<Search/>} inputState={addMaterial.count} setInputState={setCount}/>,
        <Input background='white' placeholder='Jednostka miary' icon={<Search/>} inputState={addMaterial.measure} setInputState={setMeasure}/>
    ]
}

export const saveMaterial = (addMaterial, data, setData) => {
    const postMethod = async () => {
        try {
            const dto = {
                category: addMaterial.category,
                name: addMaterial.name,
                supplier: addMaterial.supplier,
                count: addMaterial.count,
                measure: addMaterial.measure,
                notExpired: true
            }
            const tool = await post('http://localhost:8080/api/materials', dto, sessionStorage.getItem("JWT"))
            setData([...data, tool])
        }catch (exception){}
    }
    if(addMaterial.validation === false)
        alert("Wszystkie pola są obowiązkowe")
    else
        postMethod()
}

export const deleteMaterial = (id, data, setData) => {
    const deleteToolAsync = async () => {
        try {
            await del('http://localhost:8080/api/materials/'+id, sessionStorage.getItem('JWT'))
            setData(data.filter((team) => team.id !== id))
        }catch (exception){}
    }
    deleteToolAsync()
}