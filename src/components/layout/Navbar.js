import { Link } from 'react-router-dom';
import {BsSearch,BsBell,BsBriefcase,BsCaretDown} from 'react-icons/bs';
import styles from './Navbar.module.css';
import logo from '../../img/studio_ghibli.gif';
import userImage from '../../img/user.jpg';

function Navbar(){

    return(
        <nav className={styles.nav}>
            <Link className={styles.logo} to="/">
                    <img src={logo} alt='logo'/>
            </Link>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/News">News</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
            </ul>
            <ul className={styles.user}>
                <li>
                    <input type="text" placeholder=''/>
                   <button><BsSearch/></button> 
                </li>
                <li>
                    <Link to="/"><BsBell/></Link>
                </li>
                <li>
                    <Link to="/"><BsBriefcase/></Link>
                </li>
                <li>
                    <div>
                        <div>
                            <img src={userImage} alt='user'/>
                        </div>
                        <span>Adel</span>
                        <button><BsCaretDown/></button>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;