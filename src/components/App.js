import { Route, Routes } from "react-router-dom";
import Home from "pages/Home.jsx";
import Layout from "./Layout";
import MovieDetails from "pages/MovieDetails";
import Cast from "./Cast";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<div>Search Movies By Name</div>} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<div>Reviews</div>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
