import styles from './Menu.module.css'
import {Person, People, Assignment, Build, Layers, ShoppingCart, AttachMoney, Assessment, Description} from '@material-ui/icons';
import {NavLink} from 'react-router-dom'

const Option = ({icon, text}) => {
    return(
        <div className={styles.Option}>
            {icon}
            <p>{text}</p>
        </div>
    )
}

const Menu = () => {
    return(
        <div className={styles.Menu}>
            <NavLink activeClassName={styles.ActiveLink} className={styles.Link} to='/employers'>
                <Option icon={<Person/>} text='Pracownicy'/>
            </NavLink>
            <NavLink activeClassName={styles.ActiveLink} className={styles.Link} to='/teams'>
                <Option icon={<People/>} text='Teamy'/>
            </NavLink>
            <NavLink activeClassName={styles.ActiveLink} className={styles.Link} to='/tasks'>
                <Option icon={<Assignment/>} text='Zadania'/>
            </NavLink>
            <NavLink activeClassName={styles.ActiveLink} className={styles.Link} to='/tools'>
                <Option icon={<Build/>} text='Narzędzia'/>
            </NavLink>
            <NavLink activeClassName={styles.ActiveLink} className={styles.Link} to='/materials'>
                <Option icon={<Layers/>} text='Zasoby'/>
            </NavLink>
            <NavLink activeClassName={styles.ActiveLink} className={styles.Link} to='/reports'>
                <Option icon={<Description/>} text='Raporty'/>
            </NavLink>
            <NavLink activeClassName={styles.ActiveLink} className={styles.Link} to='/products'>
                <Option icon={<ShoppingCart/>} text='Produkty'/>
            </NavLink>
            <NavLink activeClassName={styles.ActiveLink} className={styles.Link} to='/finance'>
                <Option icon={<AttachMoney/>} text='Finanse'/>
            </NavLink>
            <NavLink activeClassName={styles.ActiveLink} className={styles.Link} to='/analitics'>
                <Option icon={<Assessment/>} text='Zestawienia'/>
            </NavLink>
        </div>
    )
}

export default Menu