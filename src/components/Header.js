import { Link } from "react-router-dom";
import "../Styles/Header.css";
import "font-awesome/css/font-awesome.min.css";

export default function Header() {
  return (
    <header className="header-fixed">
      <div className="header-limiter">
        <h1>
          <Link to="/">
            Watch<span>Movies</span>
          </Link>
        </h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Pricing</Link>
          <Link to="/">About</Link>
          <Link to="/">Faq</Link>
          <Link to="/">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
