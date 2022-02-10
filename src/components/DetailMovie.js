import "../Styles/DetailsMovie.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DetailMovie() {
  const [movieDetail, setMovieDetail] = useState([]);

  const [videoDetail, setVideoDetail] = useState([]);
  const { movieId } = useParams();

  const imageUrl = "http://image.tmdb.org/t/p/w500";

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
    <div className="detailsContainer">
      <img
        className="col movieImg"
        src={imageUrl + movieDetail.poster_path}
        alt={movieDetail.titl}
      ></img>
      <div className="col movieDetails">
        <p className="firstItem">
          <strong>Title:</strong>
          {movieDetail.title}
        </p>
        <p>
          <strong>Genres:</strong>

          {!!movieDetail.genres &&
            movieDetail.genres
              .map((genre) => {
                return genre.name;
              })
              .join(", ")}
        </p>
        <p>
          <strong>Overview:</strong>
          {movieDetail.overview}
        </p>
      </div>
    </div>
  );
}
