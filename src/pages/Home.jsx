import Gallery from "../components/Gallery";
import Banner from "../components/Banner";
import BannerImg from "../Image source 1.png"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Home() {
    return (
    <>
    <NavBar/ >
    <Banner bannerTxt={"Chez vous, partout et ailleurs"} bannerImg={BannerImg} />
    <Gallery />
    <Footer />
    </>
    );
}

export default Home