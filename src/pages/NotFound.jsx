import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import "./NotFound.scss"

function NotFound() {
    return (
        <>
            <div className="divfourofour">
            <NavBar />
            <div className="notfound_container">
                <h1 className="fourofour">404</h1>
                <h2 className="message">Oups! La page que vous demandez n'existe pas.</h2>
                <Link to="/" className="link">Retourner sur la page d’accueil</Link>
            </div>
            <Footer />
            </div>
        </>
    )
}

export default NotFound