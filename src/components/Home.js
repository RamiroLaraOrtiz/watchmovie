import { useEffect, useState } from "react";
import Movie from "./Movie";
import Pagination from "./Pagination";
import Category from "./Category";
import { getService } from "../utils/httpClient";
import "../Styles/Home.css";
import Header from "./Header";
export default function Home() {
  const [Movies, setMovies] = useState([]);

  const [Categories, setCatgories] = useState([]);

  const [Page, setPageActual] = useState(1);

  useEffect(() => {
    getMovies(Page);
    getCategories();
    window.scrollTo(0, 0)
  }, [Page]);

  const getMovies = async (Page) => {
    let urlMovies = `https://api.themoviedb.org/3/movie/popular?page=${Page}`;
    let response = getService(urlMovies);
    let dataResponse = await response;
    setMovies(dataResponse);
    setPageActual(dataResponse.page);
  };

  const getCategories = async () => {
    let urlCategories = `https://api.themoviedb.org/3/genre/movie/list`;
    let response = getService(urlCategories);
    let dataResponseCategories = await response;
    setCatgories(dataResponseCategories);
  };

  return (
    <><Header /><div className="background-div">

      <div className="container-all-cards">
        {!!Categories.genres &&
          Categories.genres.map((category) => (
            <Category
              title={category.name} id={category.id} key={category.id}
            ></Category>
          ))} </div>
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
        } } />
    </div></>
  );
}
