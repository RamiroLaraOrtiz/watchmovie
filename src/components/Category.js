import "../Styles/Category.css";
//import { Link } from "react-router-dom";
import chief from "../img/chief.jpg";
export default function Category(props) {

  return (
    <div className="card-container">
            <div className="card" style={{
              backgroundImage: `url(${chief})` ,
              backgroundPosition: 'initial',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}>
                
            </div>
            <p className="title-card">{props.title}</p>  
    </div>
  );
}
