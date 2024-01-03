import "./Stars.scss";

function Stars({ rating }) {

  const constellation = Array.from({ length: 5 }).map((_, index) => (
    <i key={index} className={index < rating ? "fa-solid fa-star red" : "fa-solid fa-star grey"} />
  ));

  return <div className="constel">{constellation}</div>
}

export default Stars