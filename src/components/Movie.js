import "../Styles/Movie.css";
import { Link } from "react-router-dom";
export default function Movie(props) {
  let image =
    props.img == null
      ? require("../img/notfound.jpg").default
      : "https://image.tmdb.org/t/p/w500/" + props.img;

  return (
    <div className="grid-item">
      <Link style={{ textDecoration: "none" }} to={"/movie/" + props.id}>
        <img className="image-poster border-img " src={image} alt={image} />
        <br></br>
        <span className="color-font">{props.title}</span>
      </Link>
    </div>
  );
}
