import styles from './MenuPages.module.css'
import List from "../../components/List/List";
import Text from "../../components/Text/Text";
import DoubleLineText from "../../components/DoubleLineText/DoubleLineText";
import {useEffect, useState} from "react";
import {deleteEmployer, getEmployers, postEmployer, putExpiringEmployer} from "../../api/EmployersApi";
import Button from "../../components/Button/Button";
import {Add, DeleteForever} from "@material-ui/icons";
import modalStyles from '../../components/Modal/Modal.module.css'
import Modal from "../../components/Modal/Modal";
import RegistrationPanel from "../AuthPages/RegistrationPanel";
import {postRegistrationData} from "../../api/AuthApi";
import Submenu from "../../components/Submenu/Submenu";
import { useLocation } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {clearAllRegister, setRegisterValidation} from "../../redux/actions";

const Employers = ({data, setData, reversedData, setReversedData}) => {
    const register = useSelector(state => state.register)
    const dispatch = useDispatch();

    const location = useLocation();

    const labels = ['Nr', 'Imię i Nazwisko', 'Wiek/Pesel', 'Adres', 'Kontakt', 'Stanowisko', 'Wynagrodzenie', 'Usuń']
    const sizing = '0.2fr 1.2fr 0.9fr 1.2fr 0.9fr 0.6fr 0.6fr 120px'
    const putExpiringEmployerMethod = (id, notExpired) => {
        const putExpiringEmployerAsync = async () => {
            try {
                await putExpiringEmployer(id, notExpired, sessionStorage.getItem('JWT'))
                setData(data.filter((employer) => employer.id !== id))
                const employer = data.filter((employer) => employer.id === id)[0]
                setReversedData([...reversedData, employer])
            }catch (exception){

            }
        }
        putExpiringEmployerAsync()
    }
    const template = (nr, rowData) => {
        return [
            <Text content={nr} variant='bold'/>,
            <Text content={rowData.name+' '+rowData.lastName}/>,
            <DoubleLineText firstLine={rowData.age+' lat'} secondLine={rowData.pessel}/>,
            <DoubleLineText firstLine={rowData.street} secondLine={rowData.cityCode+' '+rowData.city}/>,
            <Text content={rowData.phone}/>,
            <Text content={rowData.position}/>,
            <Text content={rowData.salary+' PLN'} variant='special'/>,
            <div className='Center'>
                {location.pathname === '/admin/employers/active' ?
                    <Button icon={<DeleteForever fontSize='small'/>} text='Usuń' onClick={()=>{putExpiringEmployerMethod(rowData.id, false)}}/> :
                    <Button icon={<Add fontSize='small'/>} text='Przywróć' onClick={()=>{putExpiringEmployerMethod(rowData.id, true)}}/>
                }
            </div>
        ]
    }

    const openDialog = () =>{
        const modal = document.getElementById('modal')
        modal.classList.add(modalStyles.ModalVisible)
    }

    const modalInputs = [
        <RegistrationPanel type='add'/>
    ]

    const submenuOptions = [{
        value: 'Aktywni',
        path: '/admin/employers/active'
        },{
        value: 'Archiwalni',
        path: '/admin/employers/archival'
    }]

    return(
        <div className={styles.MenuPages}>
            <Submenu options={submenuOptions}/>
            <List labels={labels} sizing={sizing} template={template} data={data.sort((a,b)=>a.lastName+''+a.name < b.lastName+''+b.name ? -1 : 1)}/>
            <div className='Right'>
                {location.pathname === '/admin/employers/active' ?
                    <Button icon={<Add fontSize='small'/>} text='Dodaj' onClick={() => openDialog()}/> :
                    <></>
                }
            </div>
            {location.pathname === '/admin/employers/active' ?
                <Modal title='Dodaj produkt' inputs={modalInputs} onClick={()=>postEmployer(register, sessionStorage.getItem("JWT"))}
                       onCleaning={()=>dispatch(clearAllRegister())} validate={register.validation} setValidate={(validation)=>dispatch(setRegisterValidation(validation))}/> :
                <></>
            }
        </div>
    )
}

export default Employers