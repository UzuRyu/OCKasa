import { useParams, Navigate } from "react-router-dom";
import datas from "../logements.json";
import Carrousel from "../components/Carrousel";

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
      <div>
          <h1>{title}</h1>
          <h1>{location}</h1>
          <h1>{rating}</h1>
          <Carrousel data={pictures}/>
      </div>
    </div>
  );
}

export default Fiche;
