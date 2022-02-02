import "../Styles/Home.css";

export default function Movie(props) {
  return (
    <div className="grid-item">
      <img
        className="image-poster border-img"
        src={"https://image.tmdb.org/t/p/w154/" + props.img}
        alt={props.img}
        key={props.img}
      />
      <br></br>
      <span className="color-font">{props.title}</span>
    </div>
  );
}
