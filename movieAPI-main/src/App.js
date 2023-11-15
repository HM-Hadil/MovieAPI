// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import MovieDetails from "./components/MovieDetails";
import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route> 
        <Route exact path="/movieDetails/:id" element={<MovieDetails />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;
