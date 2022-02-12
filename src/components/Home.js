import { useEffect, useState } from "react";
import Movie from "./Movie";
import { getService } from "../utils/httpClient";
import "../Styles/Home.css";
export default function Home() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    let urlMovies = "https://api.themoviedb.org/3/movie/popular?page=1";
    var response = getService(urlMovies);
    var dataResponse = await response;
    setPeliculas(dataResponse);
  };

  return (
    <div className="cover-all">
      <div className="grid-container">
        {!!peliculas.results &&
          peliculas.results.map((pelicula) => (
            <Movie
              img={pelicula.poster_path}
              title={pelicula.title}
              id={pelicula.id}
              key={pelicula.id}
            ></Movie>
          ))}
      </div>
    </div>
  );
}
