/* eslint-disable array-callback-return */
import "../Styles/ActorPage.css";
import { getService } from "../utils/httpClient";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import { useEffect, useState } from "react";


export default function ActorPage() {

  const { actorId } = useParams();

  const imageUrl = "https://image.tmdb.org/t/p/original";
  
  const [ActorDetail, setActorDetail] = useState([]);
  
  const [ActorImages, setActorImages] = useState([]);
  
  const [ExternalIds, ActorExternalIds] = useState([]);
  useEffect(() => {
    getActorDetails(actorId);
    getActorImages(actorId);
    getActorExternalIds(actorId);
  }, [actorId]);

  const getActorDetails = async (actorId) => {
    let urlDetails = `https://api.themoviedb.org/3/person/${actorId}`;

    let response = getService(urlDetails);
    let actorResponse = await response;
    console.log(actorResponse)
    setActorDetail(actorResponse);
  };

  const getActorImages = async (actorId) => {
    let urlImages = `https://api.themoviedb.org/3/person/${actorId}/images`;
    let imagesCrousel = [];
    let response = getService(urlImages);
    let imagesResponse = await response;

    imagesResponse.profiles.map((images) => {
      imagesCrousel.push({
        original: `${imageUrl + images.file_path}`,
        thumbnail: `${imageUrl + images.file_path}`,
      });
    });
    setActorImages(imagesCrousel);
  };

  const getActorExternalIds = async (actorId) => {
    let urlExternal_ids = ` https://api.themoviedb.org/3/person/${actorId}/external_ids`;

    let response = getService(urlExternal_ids);
    let responseExternalIds = await response;

    ActorExternalIds(responseExternalIds);
  };
 

  const calculate_age = (dob1) => {
    let today = new Date();
    let birthDate = new Date(dob1);  // create a date object directly from `dob1` argument
    let age_now = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age_now--;
    }
    
    return age_now;
  }
  return(
  <div>
    <div className="detailsContainerActor">
      <div className="profile-image">
        <img
            className="col-details-actor ActorImg"
            src={imageUrl + ActorDetail.profile_path}
            alt={ActorDetail.profile_path}
          ></img>
        <p>Name: {ActorDetail.name}</p>

        <p>Also known as: 
             {!!ActorDetail.also_known_as &&
              ActorDetail.also_known_as
                .map((actor) => {
                  return actor;
                })
                .join(", ")}</p>
        <p>Birthday: {ActorDetail.birthday} ({calculate_age(ActorDetail.birthday)} Years)</p>
        <p>deathday: {ActorDetail.deathday  == null ?'still alive':ActorDetail.deathday}</p>
        <p>Place of birth: {ActorDetail.place_of_birth }</p>
      </div>
      <div className="profile-bio-images">
      <p className="biograpy"> Biography:</p>
       <p className="biograpy">  {ActorDetail.biography}</p>
       <div className="col-images-gallery"> 
        <ImageGallery items={ActorImages} showIndex={true} />
       </div>
      </div>
    </div>
  </div>);
}
