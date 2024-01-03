import "./Banner.scss";

function Banner({ bannerTxt, bannerImg }) {
    return (
        <div className="banner_container">
            <img src={bannerImg} alt="Bannière"></img>
            {bannerTxt && <h3>{bannerTxt}</h3>}
        </div>
    );
}

export default Banner