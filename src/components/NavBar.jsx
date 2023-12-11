import { Link } from "react-router-dom";
import "./NavBar.scss"
import Logo from '../KASA_LOGO.svg';

function NavBar() {
    return (
        <div className="nav_global">
            <img src={Logo} alt="Logo" className="logo"/>
            <nav>
            <Link to="">Accueil</Link>
            <Link to="">À propos</Link>
            </nav>
        </div>
    )
}

export default NavBar