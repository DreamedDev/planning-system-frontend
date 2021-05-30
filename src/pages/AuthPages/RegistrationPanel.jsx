import Input from "../../components/Input/Input";
import {ArrowBack, ArrowForward, LockOpen, Person, Security} from "@material-ui/icons";
import styles from "./AuthPages.module.css";
import Button from "../../components/Button/Button";
import {useEffect, useState} from "react";
import {postRegistrationData} from "../../api/AuthApi";
import {useHistory} from "react-router-dom";
import {postEmployer} from "../../api/EmployersApi";

const UserBasics = ({username, setUsername, password, setPassword, passwordRepeat, setPasswordRepeat, setRegistrationStep, type}) => {
    return(
        <>
            <Input placeholder="Nazwa użytkownika" icon={<Person/>} inputState={username} setInputState={setUsername}/>
            <Input type="password" placeholder="Hasło" icon={<Security/>} inputState={password} setInputState={setPassword}/>
            <Input type="password" placeholder="Powtórz hasło" icon={<Security/>} inputState={passwordRepeat} setInputState={setPasswordRepeat}/>
            <div className={type === 'create' ? styles.SubmitCreate : styles.SubmitAdd}>
                <Button icon={<ArrowForward fontSize='small'/>} text='Krok 2' onClick={()=>{password===passwordRepeat ? setRegistrationStep(2) : alert('Nieprawidłowo powtórzone hadło')}}/>
            </div>
        </>
    )
}

const UserDetails = ({name, setName, lastName, setLastName, age, setAge, pessel, setPessel, setRegistrationStep, type}) => {
    return(
        <>
            <Input placeholder="Imię" icon={<Person/>} inputState={name} setInputState={setName}/>
            <Input placeholder="Nazwisko" icon={<Person/>} inputState={lastName} setInputState={setLastName}/>
            <Input placeholder="Wiek" icon={<Person/>} inputState={age} setInputState={setAge}/>
            <Input placeholder="Pesel" icon={<Person/>} inputState={pessel} setInputState={setPessel}/>
            <div className={type === 'create' ? styles.SubmitCreate : styles.SubmitAdd}>
                <Button icon={<ArrowBack fontSize='small'/>} text='Krok 1' onClick={()=>{setRegistrationStep(1)}}/>
                <Button icon={<ArrowForward fontSize='small'/>} text='Krok 3' onClick={()=>{setRegistrationStep(3)}}/>
            </div>
        </>
    )
}

const UserContact = ({street, setStreet, city, setCity, cityCode, setCityCode, phone, setPhone, setRegistrationStep, type}) => {
    return(
        <>
            <Input placeholder="Ulica" icon={<Person/>} inputState={street} setInputState={setStreet}/>
            <Input placeholder="Miejscowość" icon={<Person/>} inputState={city} setInputState={setCity}/>
            <Input placeholder="Kod pocztowy" icon={<Person/>} inputState={cityCode} setInputState={setCityCode}/>
            <Input placeholder="Telefon" icon={<Person/>} inputState={phone} setInputState={setPhone}/>
            <div className={type === 'create' ? styles.SubmitCreate : styles.SubmitAdd}>
                <Button icon={<ArrowBack fontSize='small'/>} text='Krok 2' onClick={()=>{setRegistrationStep(2)}}/>
                <Button icon={<ArrowForward fontSize='small'/>} text='Krok 4' onClick={()=>{setRegistrationStep(4)}}/>
            </div>
        </>
    )
}

const CompanyGenerator = ({companyName, setCompanyName, adminKey, setAdminKey, position, setPosition, salary, setSalary, setRegistrationStep, summit, type}) => {
    return(
        <>
            <Input placeholder="Nazwa firmy" icon={<Person/>} inputState={companyName} setInputState={setCompanyName}/>
            <Input placeholder="Klucz administracyjny" icon={<Person/>} inputState={adminKey} setInputState={setAdminKey}/>
            <Input placeholder="Pozycja(prezes, kierownik, etc.)" icon={<Person/>} inputState={position} setInputState={setPosition}/>
            <Input placeholder="Wynagrodzenie" icon={<Person/>} inputState={salary} setInputState={setSalary}/>
            <div className={type === 'create' ? styles.SubmitCreate : styles.SubmitAdd}>
                <Button icon={<ArrowBack fontSize='small'/>} text='Krok 3' onClick={()=>{setRegistrationStep(3)}}/>
                <Button icon={<LockOpen fontSize='small'/>} text='Zarejestruj' onClick={()=>{summit()}}/>
            </div>
        </>
    )
}

const CompanyAdder = ({role, setRole, position, setPosition, salary, setSalary, setRegistrationStep, summit, type}) => {
    return(
        <>
            <Input placeholder="Rola(Admin/User)" icon={<Person/>} inputState={role} setInputState={setRole}/>
            <Input placeholder="Pozycja(prezes, kierownik, etc.)" icon={<Person/>} inputState={position} setInputState={setPosition}/>
            <Input placeholder="Wynagrodzenie" icon={<Person/>} inputState={salary} setInputState={setSalary}/>
            <div className={type === 'create' ? styles.SubmitCreate : styles.SubmitAdd}>
                <Button icon={<ArrowBack fontSize='small'/>} text='Krok 3' onClick={()=>{setRegistrationStep(3)}}/>
            </div>
        </>
    )
}

const RegistrationPanel = ({type='create', setCleaningCallback=()=>{}, setSummitCallback=()=>{}, validation, setValidation, employersData, setEmployersData}) => {

    const [registrationStep, setRegistrationStep] = useState(1);

    const history = useHistory();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordRepeat, setPasswordRepeat] = useState("")

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")
    const [pessel, setPessel] = useState("")

    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [cityCode, setCityCode] = useState("")
    const [phone, setPhone] = useState("")

    const [companyName, setCompanyName] = useState("")
    const [role, setRole] = useState("")
    const [adminKey, setAdminKey] = useState("")
    const [position, setPosition] = useState("")
    const [salary, setSalary] = useState("")

    const cleaning = () => {
        setRegistrationStep(1)

        setUsername("")
        setPassword("")
        setPasswordRepeat("")

        setName("")
        setLastName("")
        setAge("")
        setPessel("")

        setStreet("")
        setCity("")
        setCityCode("")
        setPhone("")

        setCompanyName("")
        setRole("")
        setAdminKey("")
        setPosition("")
        setSalary("")
    }

    const registration = () => {
        const register = async () => {
            try {
                if(password === passwordRepeat){
                    if(type==='create'){
                        await postRegistrationData(registrationStep, username, name, lastName, age, pessel, street, cityCode, city, phone, position, salary, password, companyName, adminKey)
                        alert("Firma "+companyName+" została zarejestrowania.")
                        history.push("/admin/employers");
                    } else {
                        const employer = await postEmployer(username, name, lastName, age, pessel, street, cityCode, city, phone, position, salary, password, role, sessionStorage.getItem("JWT"))
                        // let employers = employersData
                        // employers.push(employer)
                        // setEmployersData(employers)
                        setEmployersData([...employersData, employer])
                        alert("Dodano nowego użytkownika.")
                    }
                }
            }catch (exception){

            }
        }
        register()
    }

    const summit = () => {
        if(validation === false)
            alert("Wszystkie pola są obowiązkowe")
        else
            registration()
    }

    useEffect(()=>{
        setCleaningCallback(()=>cleaning)
        setSummitCallback(()=>summit)
        if(username === "" || password === "" ||
            name === "" || lastName === "" || age === "" || pessel === "" ||
            street === "" || city === "" || cityCode === "" || phone === "" ||
            (type === 'create' && companyName === "") || (type === 'create' && adminKey === "") || (type !== 'create' && role === "") || position === "" || salary === ""){
            setValidation(false)
        } else {
            setValidation(true)
        }
    },[username, password, passwordRepeat, name, lastName, age, pessel, street, city, cityCode, phone, companyName, role, adminKey, position, salary, validation])

    if(registrationStep===1)
        return (<UserBasics  username={username} setUsername={setUsername} password={password} setPassword={setPassword} passwordRepeat={passwordRepeat} setPasswordRepeat={setPasswordRepeat} setRegistrationStep={setRegistrationStep} type={type}/>)
    else if(registrationStep===2)
        return (<UserDetails name={name} setName={setName} lastName={lastName} setLastName={setLastName} age={age} setAge={setAge} pessel={pessel} setPessel={setPessel} setRegistrationStep={setRegistrationStep} type={type}/>)
    else if(registrationStep===3)
        return (<UserContact street={street} setStreet={setStreet} city={city} setCity={setCity} cityCode={cityCode} setCityCode={setCityCode} phone={phone} setPhone={setPhone} setRegistrationStep={setRegistrationStep} type={type}/>)
    else
        return type === 'create' ?
            (<CompanyGenerator companyName={companyName} setCompanyName={setCompanyName} adminKey={adminKey} setAdminKey={setAdminKey} position={position} setPosition={setPosition} salary={salary} setSalary={setSalary} setRegistrationStep={setRegistrationStep} summit={summit} type={type}/>) :
            (<CompanyAdder role={role} setRole={setRole} position={position} setPosition={setPosition} salary={salary} setSalary={setSalary} setRegistrationStep={setRegistrationStep} summit={summit} type={type}/>)
}

export default RegistrationPanel