import Gallery from "../components/Gallery";
import Banner from "../components/Banner";
import BannerImg from "../Image source 1.png"

function Home() {
    return (
    <>
    <Banner bannerTxt={"Banner Texte"} bannerImg={BannerImg} />
    <Gallery />
    </>
    );
}

export default Home