import "../Styles/DetailsMovie.css";
import { getService } from "../utils/httpClient";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import { useEffect, useState } from "react";

export default function DetailMovie() {
  const [movieDetail, setMovieDetail] = useState([]);

  const [imagesAndVideoDetail, setimagesAndVideoDetail] = useState([]);

  const { movieId } = useParams();

  const imageUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    getDetailsMovie(movieId);
    getDetailsMovieVideosAndImages(movieId);
  }, [movieId]);

  const getDetailsMovie = async (movieId) => {
    var urlDetails = `https://api.themoviedb.org/3/movie/${movieId}`;

    var response = getService(urlDetails);
    var dataResponse = await response;
    setMovieDetail(dataResponse);
  };
  const getDetailsMovieVideosAndImages = async (movieId) => {
    let imagesAndVideos = [];
    var urlDetailsVideos = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
    var urlDetailsImages = `https://api.themoviedb.org/3/movie/${movieId}/images`;

    var response = getService(urlDetailsVideos);
    var responseImages = getService(urlDetailsImages);

    var dataResponseVideos = await response;
    var dataResponseImages = await responseImages;
    dataResponseImages.backdrops.map((images) => {
      imagesAndVideos.push({
        original: `${imageUrl + images.file_path}`,
        thumbnail: `${imageUrl + images.file_path}`,
      });
    });

    dataResponseVideos.results.map((video) => {
      if (video.site === "YouTube") {
        imagesAndVideos.push({
          thumbnail: `https://icones.pro/wp-content/uploads/2021/02/icone-youtube-player.png`,
          original: `https://icones.pro/wp-content/uploads/2021/02/icone-youtube-player.png`,
          embedUrl: `https://youtube.com/embed/${video.key}`,
        });
      }
    });

    dataResponseImages.posters.map((images) => {
      imagesAndVideos.push({
        original: `${imageUrl + images.file_path}`,
        thumbnail: `${imageUrl + images.file_path}`,
      });
    });
    setimagesAndVideoDetail(imagesAndVideos);
  };

  return (
    <div
      className="background-movie"
      style={{
        backgroundImage: `url(${imageUrl + movieDetail.poster_path})`,
      }}
    >
      <div className="detailsContainer ">
        <img
          className="col movieImg"
          src={imageUrl + movieDetail.poster_path}
          alt={movieDetail.titl}
        ></img>
        <div className="col2 movieDetails">
          <p className="firstItem">
            <strong>{movieDetail.title}</strong>
          </p>
          <p className="p-titles ">
            <strong className="color-titles">Tagline: </strong>
            {movieDetail.tagline}
          </p>
          <p className="color-titles">{movieDetail.overview}</p>
          <p className="p-titles ">
            <strong className="color-titles">Genres: </strong>
            {!!movieDetail.genres &&
              movieDetail.genres
                .map((genre) => {
                  return genre.name;
                })
                .join(", ")}
          </p>
          <p className="p-titles ">
            <strong className="color-titles">Homepage: </strong>
            <a className="no-link" href={movieDetail.homepage}>
              {movieDetail.homepage}
            </a>
          </p>
          <p className="p-titles ">
            <strong className="color-titles">Status: </strong>
            {movieDetail.status}
          </p>
          <p className="p-titles ">
            <strong className="color-titles">Release date: </strong>
            {movieDetail.release_date}
          </p>
        </div>
      </div>
      <div className="imgesContainer">
        <div className="colImages">
          <ImageGallery items={imagesAndVideoDetail} showIndex={true} />
        </div>
      </div>
    </div>
  );
}
