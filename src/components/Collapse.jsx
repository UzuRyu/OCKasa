import { useState } from "react"
import "./Collapse.scss"
import Arrow from "../arrow.svg";

function Collapse({titre, contenu}) {
    const [open, setOpen] = useState(false);

    const collapsing = () => {
        setOpen(!open);
        console.log(contenu);
    }

    const isString = typeof contenu === 'string'

    return (
        <div className="coll_container">
            <h4 onClick={collapsing}>{titre}<img src={Arrow} className="arrow"/></h4>
            {isString && <p className={open ? "coll_content" : "coll_centent coll_content-hidden" }>{contenu}</p>}
            {!isString && <ul className={open ? "coll_content" : "coll_centent coll_content-hidden" }>{contenu.map((cont,i) => <li key={i}>{cont}</li> )}</ul>}
        </div>
    )
}

export default Collapse