/* eslint-disable array-callback-return */
import "../Styles/DetailsMovie.css";
import { getService } from "../utils/httpClient";
import { useParams, Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import { useEffect, useState } from "react";
import CircularProgress from "./CircularProgress";
import Movie from "./Movie";
import ShowMoreText from "react-show-more-text";

export default function DetailMovie() {
  const [movieDetail, setMovieDetail] = useState([]);

  const [imagesDetail, setimagesDetail] = useState([]);

  const [videosDetail, setVideosDetail] = useState([]);

  const [CreditsDetail, setCreditsDetail] = useState([]);

  
  const [similarMovies, setMovieSimilar] = useState([]);
  

  const { movieId } = useParams();

  const imageUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    getDetailsMovie(movieId);
    getDetailsMovieVideosAndImages(movieId);
    getMovieSimilar(movieId);
  }, [movieId]);

  const getDetailsMovie = async (movieId) => {
    let urlDetails = `https://api.themoviedb.org/3/movie/${movieId}`;

    let response = getService(urlDetails);
    let dataResponse = await response;
    setMovieDetail(dataResponse);
  };
  const getDetailsMovieVideosAndImages = async (movieId) => {
    let imagesCrousel = [];
    let urlDetailsVideos = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
    let urlDetailsImages = `https://api.themoviedb.org/3/movie/${movieId}/images`;
    let urlDetailsCredits = `https://api.themoviedb.org/3/movie/${movieId}/credits`;

    let response = getService(urlDetailsVideos);
    let responseImages = getService(urlDetailsImages);
    let responseCredits = getService(urlDetailsCredits);

    let dataResponseVideos = await response;
    let dataResponseImages = await responseImages;
    let dataResponseCredits = await responseCredits;

    dataResponseImages.backdrops.map((images) => {
      imagesCrousel.push({
        original: `${imageUrl + images.file_path}`,
        thumbnail: `${imageUrl + images.file_path}`,
      });
    });

    dataResponseImages.posters.map((images) => {
      imagesCrousel.push({
        original: `${imageUrl + images.file_path}`,
        thumbnail: `${imageUrl + images.file_path}`,
      });
    });

    setVideosDetail(dataResponseVideos);
    setimagesDetail(imagesCrousel);
    setCreditsDetail(dataResponseCredits);
  };

  const getMovieSimilar = async (movieId) => {
    let urlMovieSimilar = `https://api.themoviedb.org/3/movie/${movieId}/similar`;

    let response = getService(urlMovieSimilar);
    let dataResponse = await response;
    console.log(dataResponse)
    setMovieSimilar(dataResponse);
  };

  const convertMinsToTime = (mins) => {
    let hours = Math.floor(mins / 60);
    let minutes = mins % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}hrs:${minutes}mins`;
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
          src={
            movieDetail.poster_path == null
              ? require("../img/notfound.jpg").default
              : imageUrl + movieDetail.poster_path
          }
          alt={movieDetail.poster_path}
        ></img>
        <div className="col2 movieDetails">
          <p className="firstItem">
            <strong>{movieDetail.title}</strong>
          </p>
          <div className="rate-and-dates">
            <CircularProgress
              size={250}
              sizeSVG={80}
              strokeWidth={20.5}
              percentage={movieDetail.vote_average}
              color="#f4b907"
            />
            <p style={{ marginleft: "2%" }} className="p-titles">
              <strong className="color-titles">RunTime: </strong>
              {convertMinsToTime(movieDetail.runtime)}
            </p>
          </div>

          <p className="p-titles ">
            <strong className="color-titles">Tagline: </strong>
            {movieDetail.tagline}
          </p>
          <p className="color-titles p-overview">{movieDetail.overview}</p>
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
          <p className="p-titles ">
            <strong className="color-titles">Cast: </strong>
            <ShowMoreText
              className="margin-cast"
              lines={2}
              more="Show More"
              less="Show Less"
              expanded={false}
            >
              {!!CreditsDetail.cast &&
                CreditsDetail.cast
                  .map((cast) => {
                    return (
                      <Link
                        key={cast.id}
                        style={{ textDecoration: "none", color: "white" }}
                        to={"/watchmovie/actor/" + cast.id}
                      >
                        {cast.name}
                      </Link>
                    );
                  })
                  .reduce(
                    (acc, x) =>
                      acc === null ? (
                        x
                      ) : (
                        <>
                          {acc} , {x}
                        </>
                      ),
                    null
                  )}
            </ShowMoreText>
          </p>
          <div className="logos-companies">
            <strong className="color-titles"> production companies: </strong>
            {!!movieDetail.production_companies &&
              movieDetail.production_companies.map((movie, index) => {
                if (movie.logo_path != null) {
                  return (
                    <img
                      className="img-logo"
                      src={imageUrl + movie.logo_path}
                      alt={movie.name + index}
                      key={movie.name}
                    ></img>
                  );
                }
              })}
          </div>
        </div>
      </div>
      <div className="imgesContainer">
        <div className="colImages">
          <ImageGallery items={imagesDetail} showIndex={true} />
        </div>
      </div>
      <div className="videosContainer">
        {!!videosDetail.results &&
          videosDetail.results.map((video, index) => {
            return (
              <div className="col-video">
                <iframe
                  title={video.name}
                  src={`https://youtube.com/embed/${video.key}`}
                  key={video.name + index}
                  allowFullScreen
                ></iframe>
                <p style={{ color: "white" }}>{video.name}</p>
              </div>
            );
          })}
      </div>
      <div className="similarMovies">
      <p className="p-similar"> Similar movies</p>
        <div className="grid-container">
          {!!similarMovies.results &&
            similarMovies.results.map((movie) => (
              <Movie
                img={movie.poster_path}
                title={movie.title}
                id={movie.id}
                key={movie.id}
              ></Movie>
            ))}
        </div>
      </div>
    </div>
  );
}
