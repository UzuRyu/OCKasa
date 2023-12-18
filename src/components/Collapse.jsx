import { useState } from "react"
import "./Collapse.scss"
import Arrow from "../arrow.svg";

function Collapse({titre, contenu}) {
    const [open, setOpen] = useState(false);

    const collapsing = () => {
        setOpen(!open);
    }

    const isString = typeof contenu === 'string'

    return (
        <div className={`coll_container ${open ? 'show' : ''}`}>
            <h4 onClick={collapsing}>{titre}<img src={Arrow} className={`arrow ${open ? 'open' : ''}`}/></h4>
            <div className="coll_content">
                <div>
            {isString && <p className="coll_text">{contenu}</p>}
            {!isString && <ul className="coll_text">{contenu.map((cont,i) => <li key={i}>{cont}</li> )}</ul>}
                </div>
            </div>
        </div>
    )
}

export default Collapse