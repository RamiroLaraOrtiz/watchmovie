
import "../Styles/ActorPage.css";
import { getService } from "../utils/httpClient";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import { useEffect, useState } from "react";


export default function ActorPage() {

  const { actorId } = useParams();

  const imageUrl = "https://image.tmdb.org/t/p/original";
  
  const [ActorDetail, setActorDetail] = useState([]);
  useEffect(() => {
    getActorDetails(actorId);
  }, [actorId]);

  const getActorDetails = async (actorId) => {
    var urlDetails = `https://api.themoviedb.org/3/person/${actorId}`;

    var response = getService(urlDetails);
    var actorResponse = await response;
    console.log(actorResponse)
    setActorDetail(actorResponse);
  };
  return(
  <div>
    <div className="detailsContainerActor">
      <div className="profile-image">
      <img
          className="col ActorImg"
          src={imageUrl + ActorDetail.profile_path}
          alt={ActorDetail.profile_path}
        ></img>
      </div>
    </div>
  </div>);
}
