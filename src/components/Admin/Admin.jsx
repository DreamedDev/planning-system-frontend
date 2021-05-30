import Menu from "../Menu/Menu";
import Body from "../Body/Body";
import Head from "../Head/Head";
import {useEffect, useState} from "react";
import { useHistory } from 'react-router-dom';

const Admin = () => {

    const history = useHistory();

    useEffect(()=>{
        const checkAuthorities = async () => {
            if(sessionStorage.getItem("JWT") === null)
                history.push("/auth/admin");
        }
        checkAuthorities()
    },[])

    return(
        <>
            <div className='FixTop'>
                <Head/>
                <Menu/>
            </div>
            <Body/>
        </>
    )
}

export default Admin