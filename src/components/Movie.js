import "../Styles/Movie.css";
import { Link } from "react-router-dom";
export default function Movie(props) {
  return (
    <div className="grid-item">
      <Link style={{ textDecoration: "none" }} to={"/movie/" + props.id}>
        <img
          className="image-poster border-img "
          src={"https://image.tmdb.org/t/p/original/" + props.img}
          alt={props.img}
        />
        <br></br>
        <span className="color-font">{props.title}</span>
      </Link>
    </div>
  );
}
