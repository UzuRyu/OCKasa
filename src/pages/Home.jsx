import Gallery from "../components/Gallery";
import Banner from "../components/Banner";
import BannerImg from "../resources/bannerHome.webp"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./Home.scss"

function Home() {
    return (
        <>
            <NavBar />
            <div className="bannergallery_container">
                <Banner bannerTxt={"Chez vous, partout et ailleurs"} bannerImg={BannerImg} />
                <Gallery />
            </div>
            <Footer />
        </>
    );
}

export default Home