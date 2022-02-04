import { useEffect, useState } from "react";
import Movie from "./Movie";
import "../Styles/Home.css";
export default function Home() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    var response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=6d799e2a11822f8942233a5824109bc3&language=en-US&page=1"
    );
    var dataResponse = await response.json();
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
