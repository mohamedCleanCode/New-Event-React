import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Card({ icon, title, desc }) {
  return (
    <div className="card col-sm-6 col-lg-4">
      <FontAwesomeIcon icon={icon} />
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}
export default Card;
