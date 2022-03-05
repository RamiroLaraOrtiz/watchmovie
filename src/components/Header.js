import { Link } from "react-router-dom";
import "../Styles/Header.css";
import "font-awesome/css/font-awesome.min.css";

export default function Header() {
  return (
    <header className="header-fixed">
      <div className="header-limiter">
        <h1>
          <Link to="/watchmovie/">
            Watch<span>Movies</span>
          </Link>
        </h1>

        <nav>
          <Link to="/watchmovie/">Home</Link>
          <Link to="/watchmovie/">Blog</Link>
          <Link to="/watchmovie/">Pricing</Link>
          <Link to="/watchmovie/">About</Link>
          <Link to="/watchmovie/">Faq</Link>
          <Link to="/watchmovie/">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
