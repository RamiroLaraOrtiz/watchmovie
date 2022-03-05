import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import DetailMovie from "./components/DetailMovie.js";
import ActorPage from "./components/ActorPage.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/watchmovie/" element={<Home />} />
        <Route exact path="/watchmovie/movie/:movieId" element={<DetailMovie />} />
        <Route exact path="/watchmovie/actor/:actorId" element={<ActorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
