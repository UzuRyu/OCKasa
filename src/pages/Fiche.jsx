import { useParams, Navigate } from "react-router-dom";
import datas from "../logements.json";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import NavBar from "../components/NavBar";

function Fiche() {
  const { id } = useParams();

  const data = datas.find((item) => item.id === id);

  if (!data) {
    return <Navigate to="../*" replace={true} />;
  }

  const {
    pictures,
    title,
    location,
    tags,
    host,
    rating,
    description,
    equipments,
  } = data;

  return (
    <div className="Fiche">
      <NavBar/>
      <div>
        <Carrousel data={pictures} />
        <div className="fiche_infos">
          <div className="info_container">
            <div className="info_localisation">
              <h1 className="info_title">{title}</h1>
              <h2 className="info_location">{location}</h2>
              <div className="info_tags">
                <p>Tags</p>
              </div>
            </div>
            <div className="info_host">
              <p>Hôte</p>
              <div className="RatingHost">
                <p>✨✨✨✨✨</p>
              </div>
            </div>
            <div className="collapse_container">
              <div className="collapse_description">
                <Collapse titre={"Description"} contenu={description}/>
                <Collapse titre={"Equipements"} contenu={equipments}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fiche;
