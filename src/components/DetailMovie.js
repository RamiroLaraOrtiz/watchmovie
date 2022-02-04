import "../Styles/DetailsMovie.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DetailMovie() {
  const [movieDetail, setMovieDetail] = useState([]);

  const [videoDetail, setVideoDetail] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getDetailsMovie();
    getDetailsMovieVideos();
  });

  const getDetailsMovie = async () => {
    var response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=6d799e2a11822f8942233a5824109bc3&language=en-US`
    );
    var dataResponse = await response.json();
    setMovieDetail(dataResponse);
  };
  const getDetailsMovieVideos = async () => {
    var response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=6d799e2a11822f8942233a5824109bc3&language=en-US`
    );
    var dataResponse = await response.json();
    setVideoDetail(dataResponse);
  };
  // {!!videoDetail.results &&
  //videoDetail.results.map((video) => <p>{video.name}</p>)}
  return (
    <div>
      <p>{movieDetail.original_title}</p>
    </div>
  );
}
