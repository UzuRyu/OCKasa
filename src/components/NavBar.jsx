import { Link, useLocation } from "react-router-dom";
import "./NavBar.scss"
import Logo from '../KASA_LOGO.svg';

function NavBar() {

    const position = useLocation();
    const path = position.pathname;

    return (
        <div className="nav_global">
            <img src={Logo} alt="Logo" className="logo"/>
            <nav>
            <Link to="/" className={path === '/' ? 'sous' : 'notsous'}>Accueil</Link>
            <Link to="/About" className={path === '/About' ? 'sous' : 'notsous'}>À propos</Link>
            </nav>
        </div>
    )
}

export default NavBar