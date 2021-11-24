import "../Styles/Home.css";

export default function Home() {
  const getMovies = async () => {
    var response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=6d799e2a11822f8942233a5824109bc3&language=en-US&page=1"
    );
    var dataResponse = await response.json();

    console.log(dataResponse);

    return dataResponse;
  };
  getMovies();
  return (
    <div className="cover-all">
      <div className="grid-container">
        <div className="grid-item"> </div>
      </div>
    </div>
  );
}
