import styles from './Header.module.css';
import Logo from '../../assets/logo.svg';


function Header(){
    return(
        <div className={styles.header}> 
            <img src={Logo} className={styles.logo} alt="Logotipo" />            
        </div>
    );
}


export default Header;