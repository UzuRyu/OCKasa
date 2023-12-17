import "./Host.scss"

function Host({data}) {

    const slicy = data.name.indexOf(" ");
    const first = data.name.slice(0, slicy);
    const last = data.name.slice(slicy + 1);

    return (
        <>
        <span className="host_firstname">{first}</span>
        <span className="host_lastname">{last}</span>
        <img className="host_pic" src={data.picture}/>
        </>
    )
}

export default Host;