import "../Styles/DetailsMovie.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DetailMovie() {
  const [movieDetail, setMovieDetail] = useState([]);

  const [videoDetail, setVideoDetail] = useState([]);
  const { movieId } = useParams();

  const imageUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    getDetailsMovie(movieId);
    getDetailsMovieVideos(movieId);
  }, [movieId]);

  const getDetailsMovie = async (movieId) => {
    var response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=6d799e2a11822f8942233a5824109bc3&language=en-US`
    );
    var dataResponse = await response.json();
    setMovieDetail(dataResponse);
  };
  const getDetailsMovieVideos = async (movieId) => {
    var response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=6d799e2a11822f8942233a5824109bc3&language=en-US`
    );
    var dataResponse = await response.json();
    setVideoDetail(dataResponse);
  };
  // {!!videoDetail.results &&
  //videoDetail.results.map((video) => <p>{video.name}</p>)}
  return (
    <div
      className="detailsContainer background-movie"
      style={{ backgroundImage: `url(${imageUrl + movieDetail.poster_path})` }}
    >
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
          <strong className="color-titles">Release date: </strong>
          {movieDetail.release_date}
        </p>
      </div>
    </div>
  );
}
