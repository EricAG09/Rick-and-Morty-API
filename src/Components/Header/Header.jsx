import logo from '../../assents/logo.png'
import Styles from '../Header/Header.module.css'

function Header () {
    return (
        <div>
            <header className={Styles.header}>
                <img className={Styles.img} src={logo} alt='logo'/>
            </header>
        </div>
    )
}

export default Header