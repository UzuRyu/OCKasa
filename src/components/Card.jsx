import "./Card.scss";
import { Link } from "react-router-dom";

function Card({id, title, cover}) {
    return (
        <div className="card_container">
        <Link to={`/Fiche/${id}`}>
            <img src={cover} alt={title}/>
            <h4>{title}</h4>
        </Link>
        </div> 
    );
}

export default Card