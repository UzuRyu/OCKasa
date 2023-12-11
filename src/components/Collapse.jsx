import { useState } from "react"
import "./Collapse.scss"

function Collapse({titre, contenu}) {
    const [open, setOpen] = useState(false);

    const collapsing = () => {
        setOpen(!open);
        console.log(open);
    }

    return (
        <div className="coll_container">
            <h4 onClick={collapsing}>{titre}</h4>
            <p className={open ? "coll_content" : "coll_centent coll_content-hidden" }>{contenu}</p>
        </div>
    )
}

export default Collapse