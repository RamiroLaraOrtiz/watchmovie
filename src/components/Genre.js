
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import Pagination from "./Pagination";
import Category from "./Category";
import { getService } from "../utils/httpClient";

import "../Styles/Genre.css";
export default function Genre() {
  
  const {genreName, genreId } = useParams();

  const [Movies, setMovies] = useState([]);

  const [Categories, setCatgories] = useState([]);

  const [Page, setPageActual] = useState(1);
  
  const [TotalPage, setTotalPage] = useState(500);

  useEffect(() => {
    getMovies(Page,genreId);
    getCategories();
    window.scrollTo(0, 0)
  }, [Page,genreId]);

  const getMovies = async (Page,genreId) => {
    let urlMovies = `https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${Page}&with_genres=${genreId}`;
    let response = getService(urlMovies);
    let dataResponse = await response;
    console.log(dataResponse)
    setMovies(dataResponse);
    setPageActual(dataResponse.page);
    setTotalPage(dataResponse.total_pages);

  };

  const getCategories = async () => {
    let urlCategories = `https://api.themoviedb.org/3/genre/movie/list`;
    let response = getService(urlCategories);
    let dataResponseCategories = await response;
    setCatgories(dataResponseCategories);
  };

  return (
<div className="background-div">
      <div className="container-all-cards"> 
      {!!Categories.genres &&
          Categories.genres.map((category) => (
            <Category
              title={category.name} id={category.id} key={category.id} onChange={() => {
                setPageActual(1);
              }}
            ></Category>
          ))}
      </div>
      <h1 className="title-genre">{genreName}</h1>
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
        total={TotalPage}
        onChange={(page) => {
          setPageActual(page);
        }}
      />
    </div>
  );
}
