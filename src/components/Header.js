import { Link } from "react-router-dom";
import "../Styles/Header.css";
import "font-awesome/css/font-awesome.min.css";
import VideoTitle from "../img/videotitle.mp4"

export default function Header() {
  return (
    <header className="video-wrapper">
      <video src={VideoTitle}  autoPlay loop muted>
      </video>

      <div className="header">
      <Link to="/">
      <h1 className="video-title">Watch <span>Movies</span></h1>
      
      </Link>
      <h2> Watch <span>Enjoy</span> and Fun</h2>
      </div>
    </header>
  );
}
