import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState, Suspense, useRef } from "react";
import Loader from "components/Loader/Loader";
import svg from "img/arrow.svg";
import css from "pages/MovieDetails/MovieDetails.module.css";
import noImage from "img/noimage.jpeg";

const API_KEY = "7962a1912dc39a09e22d58ae0351b8bc";
const URL = "https://api.themoviedb.org/3/movie";
const IMG_URL = "https://image.tmdb.org/t/p/w300/";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/");

  useEffect(() => {
    const getMovieDetails = async () => {
      let response = await fetch(
        `${URL}/${movieId}?api_key=${API_KEY}&language=en-US`
      );
      response = await response.json();
      setMovie(response);
    };

    getMovieDetails();
  }, [movieId]);

  const getReleaseYear = (releaseDate) => {
    if (!releaseDate) {
      return "????";
    }
    let releaseYear = new Date(releaseDate);
    return releaseYear.getFullYear();
  };

  const getGenres = (genres) => {
    let arr = [];
    genres.map((genre) => {
      return arr.push(genre.name);
    });
    return arr.join(", ");
  };

  return (
    <div className={css.container}>
      <Link to={backLinkLocationRef.current} className={css.back}>
        <img src={svg} alt="arrow-left" className={css.svg} />
        Go back
      </Link>
      {movie ? (
        <div className={css.info}>
          <div className={css.descr}>
            <img
              className={css.poster}
              src={
                movie.poster_path ? `${IMG_URL}${movie.poster_path}` : noImage
              }
              alt={movie.title}
            ></img>
            <div>
              <h2 className={css.name}>
                {movie.title} ({getReleaseYear(movie.release_date)})
              </h2>
              <p className={css.text}>
                User Score: {(movie.vote_average * 10).toFixed(0)}%
              </p>
              <h3>Overview</h3>
              <p className={css.text}>{movie.overview}</p>
              <h3>Genres</h3>
              <p className={css.text}>{getGenres(movie.genres)}</p>
            </div>
          </div>
          <div className={css.add}>
            <h3>Additional Information</h3>
            <ul className={css.adds}>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default MovieDetails;
