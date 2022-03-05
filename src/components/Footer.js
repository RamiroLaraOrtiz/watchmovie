import { Link } from "react-router-dom";
import "../Styles/Footer.css";
export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Sitesoch</h4>
              <ul>
                <li>
                  <Link to="/watchmovie/">Home</Link>
                </li>
                <li>
                  <Link to="/watchmovie/">About</Link>
                </li>
                <li>
                  <Link to="/watchmovie/">Pricing</Link>
                </li>
                <li>
                  <Link to="/watchmovie/">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Get Help</h4>
              <ul>
                <li>
                  <Link to="/watchmovie/">Shipping</Link>
                </li>
                <li>
                  <Link to="/watchmovie/">Returns</Link>
                </li>
                <li>
                  <Link to="/watchmovie/">Order Status</Link>
                </li>
                <li>
                  <Link to="/watchmovie/">Payment Options</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Address</h4>
              <ul>
                <li>
                  <Link to="/watchmovie/">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cupiditate adipisci quia ab omnis id ipsum quae inventore
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <Link to="/watchmovie/">
                  <i className="fa fa-google"></i>
                </Link>
                <Link to="/watchmovie/">
                  <i className="fa fa-facebook-f"></i>
                </Link>
                <Link to="/watchmovie/">
                  <i className="fa fa-instagram"></i>
                </Link>
                <Link to="/watchmovie/">
                  <i className="fa fa-twitter"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
