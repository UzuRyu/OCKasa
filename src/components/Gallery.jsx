import Card from "./Card";
import datas from "../resources/logements.json";
import "./Gallery.scss";

function Gallery() {
    return (
        <div className="gallery_container">
            {datas.map((item) => (<Card
                key={item.id}
                id={item.id}
                title={item.title}
                cover={item.cover}
            />))}
        </div>
    );
}

export default Gallery