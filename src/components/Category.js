import "../Styles/Category.css";
import { Link } from "react-router-dom";
import chief from "../img/chief.jpg";
import Action from "../img/Action.jpg";
import Animation from "../img/Animation.jpg";
import Adventure from "../img/Adventure.jpg";
import Comedy from "../img/Comedy.jpg";
import Crime from "../img/Crime.jpg";
import Documentary from "../img/Documentary.jpg";
import Drama from "../img/Drama.jpg";
import Family from "../img/Family.jpg";
import Fantasy from "../img/Fantasy.jpg";
import History from "../img/History.jpg";
import Horror from "../img/Horror.jpg";
import Music from "../img/Music.jpg";
import Mystery from "../img/Mystery.jpg";
import Romance from "../img/Romance.jpg";
import ScienceFiction from "../img/SienceFiction.jpg";
import Thriller from "../img/Thriller.jpg";
import TVMovie from "../img/TVMovie.jpg";
import War from "../img/War.jpg";
import Western from "../img/Western.jpg";



export default function Category(props) {
  const ReturnBacground = (name) => {
    switch (name) {
      case 'Action':
        return Action
      case 'Animation':
        return Animation
      case 'Adventure':
          return Adventure
      case 'Comedy':
          return Comedy
      case 'Crime':
          return Crime 
      case 'Documentary':
          return Documentary
      case 'Drama':
          return Drama
      case 'Family':
          return Family
      case 'Fantasy':
          return Fantasy  
      case 'History':
          return History  
      case 'Horror':
        return Horror;
      case 'Music':
        return Music;
      case 'Mystery':
        return Mystery;
      case 'Romance':
        return Romance;
      case 'Science Fiction':
        return ScienceFiction;
      case 'Thriller':
        return Thriller;
      case 'TV Movie':
        return TVMovie;
      case 'War':
        return War;
      case 'Western':
        return Western;
      default:
        return chief;
    }
  };

  return (
    <div className="card-container">
      
      <Link style={{ textDecoration: "none" }}  to={"/genre/"+props.title+'/'+ props.id}>
            <div className="card" style={{
              backgroundImage: `url(${ReturnBacground(props.title)})` ,
              backgroundPosition: 'initial',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}>
              
                
            </div>
            <p className="title-card">{props.title}</p>
          </Link>
    </div>
  );
}
