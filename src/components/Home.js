import { useEffect, useState } from "react";
import Movie from "./Movie";
import Pagination from "./Pagination";
import { getService } from "../utils/httpClient";
import "../Styles/Home.css";
export default function Home() {
  const [Movies, setMovies] = useState([]);

  const [Page, setPageActual] = useState(1);

  useEffect(() => {
    getMovies(Page);
  }, [Page]);

  const getMovies = async (Page) => {
    let urlMovies = `https://api.themoviedb.org/3/movie/popular?page=${Page}`;
    let response = getService(urlMovies);
    let dataResponse = await response;
    setMovies(dataResponse);
    setPageActual(dataResponse.page);
  };

  return (
    <div>
      <div className="grid-container">
        {!!Movies.results &&
          Movies.results.map((movie) => (
            <Movie
              img={movie.poster_path}
              title={movie.title}
              id={movie.id}
              key={movie.id}
            ></Movie>
          ))}
      </div>

      <Pagination
        page={Page}
        total={500}
        onChange={(page) => {
          setPageActual(page);
        }}
      />
    </div>
  );
}
