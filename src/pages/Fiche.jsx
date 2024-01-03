import { useParams, Navigate } from "react-router-dom";
import datas from "../resources/logements.json";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import NavBar from "../components/NavBar";
import Stars from "../components/Stars";
import Host from "../components/Host";
import Footer from "../components/Footer";
import "./Fiche.scss"

function Fiche() {
  const { id } = useParams();

  const data = datas.find((item) => item.id === id);

  if (!data) {
    return <Navigate to="../404" replace={false} />
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
      <NavBar />
      <div>
        <Carrousel data={pictures} />
        <div className="fiche_infos">
          <div className="info_container">
            <div className="info_flex">
              <div className="info_localisation">
                <h1 className="info_title">{title}</h1>
                <h2 className="info_location">{location}</h2>
                <div className="info_tags">
                  <ul>
                    {tags.map((tag, i) => <li key={i}>{tag}</li>)}
                  </ul>
                </div>
              </div>
              <div className="info_host">
                <Host data={host} />
                <Stars rating={rating} />
              </div>
            </div>
            <div className="collapse_container">
              <div className="collapse_description">
                <Collapse titre={"Description"} contenu={description} />
                <Collapse titre={"Equipements"} contenu={equipments} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Fiche;
