import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card({id, title, cover}) {
    return (
        <div className="card_container">
        <Link to={id}>
            <img src={cover} alt={title}/>
            <h2>{title}</h2>
        </Link>
        </div> 
    );
}

export default Card