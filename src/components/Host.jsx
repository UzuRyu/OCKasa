import "./Host.scss"

function Host({ data }) {

    const slicy = data.name.indexOf(" ");
    const first = data.name.slice(0, slicy);
    const last = data.name.slice(slicy + 1);

    return (
        <div className="host_container">
            <div className="host_name">
                <span className="host_firstname">{first}</span>
                <span className="host_lastname">{last}</span>
            </div>
            <img className="host_pic" alt="Hôte" src={data.picture} />
        </div>
    )
}

export default Host;