import {  Routes, Route,HashRouter } from "react-router-dom";
import Home from "./components/Home.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import DetailMovie from "./components/DetailMovie.js";
import ActorPage from "./components/ActorPage.js";
import "./App.css";

function App() {
  return (
    <HashRouter >
      <Header  />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movie/:movieId" element={<DetailMovie />} />
        <Route exact path="/actor/:actorId" element={<ActorPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
