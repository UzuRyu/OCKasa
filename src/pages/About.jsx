import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import bannerabout from "../resources/bannerAbout.webp";
import "./About.scss"

function About() {
    return (
        <div className="About">
            <NavBar />
            <Banner bannerImg={bannerabout} />
            <div className='AboutMain'>
                <Collapse titre={"Fiabilité"} contenu={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."} />
                <Collapse titre={"Respect"} contenu={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."} />
                <Collapse titre={"Service"} contenu={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."} />
                <Collapse titre={"Sécurité"} contenu={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."} />
            </div>
            <Footer />
        </div>)
}

export default About