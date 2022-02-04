import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import DetailMovie from "./components/DetailMovie.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movie/:movieId" element={<DetailMovie />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
