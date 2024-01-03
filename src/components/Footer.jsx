import "./Footer.scss"
import Logo from "../resources/logoKasa.svg";

function Footer() {
    return (
        <div className='footer'>
            <img src={Logo} alt="Logo de kasa blanc" className="logo logo_white" />
            <p className='copyright'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer;