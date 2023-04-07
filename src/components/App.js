import { Route, Routes } from "react-router-dom";
import Home from "pages/Home/Home.jsx";
import SharedLayout from "./SharedLayout/SharedLayout";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import SearchForm from "./SearchForm/SearchForm";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<SearchForm />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}
