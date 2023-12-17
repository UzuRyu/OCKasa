import "./Footer.scss"
import Logo from "../KASA_LOGO.svg";

function Footer() {
    return (
        <div className='Footer'>
            <img src={Logo} alt="Logo de kasa blanc" className="logo logo_white"/>
            <p className='copyright'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer;