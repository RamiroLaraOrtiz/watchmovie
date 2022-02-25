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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Pricing</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Get Help</h4>
              <ul>
                <li>
                  <Link to="/">Shipping</Link>
                </li>
                <li>
                  <Link to="/">Returns</Link>
                </li>
                <li>
                  <Link to="/">Order Status</Link>
                </li>
                <li>
                  <Link to="/">Payment Options</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Address</h4>
              <ul>
                <li>
                  <Link to="/">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cupiditate adipisci quia ab omnis id ipsum quae inventore
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <Link to="/">
                  <i className="fa fa-google"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-facebook-f"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-instagram"></i>
                </Link>
                <Link to="/">
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
