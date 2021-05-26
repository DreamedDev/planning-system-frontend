import styles from './Head.module.css'
import logo from '../../logo.svg'
import profileImg from '../../img/profile.png'

const Head = () => {
    const profile = profileImg
    return(
        <div className={styles.Head}>
            <img src={logo} alt='Logo'/>
            <p>Planning System</p>
            <p>Company Name</p>
            <img src={profile} alt='Profile'/>
        </div>
    )
}

export default Head