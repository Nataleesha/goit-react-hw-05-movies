import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loader } from "components/Loader";

const API_KEY = "7962a1912dc39a09e22d58ae0351b8bc";
const URL = "https://api.themoviedb.org/3/movie";
const IMG_URL = "https://image.tmdb.org/t/p/w300/";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

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

  console.log("MOVIE>>>>>", movie);

  const getReleaseYear = (releaseDate) => {
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
    <>
      <Link to="/">Go back</Link>
      {movie ? (
        <div>
          <img
            src={`${IMG_URL}${movie.poster_path}`}
            alt={movie.title}
          ></img>
          <div>
            <h2>
              {movie.title} ({getReleaseYear(movie.release_date)})
            </h2>
            <p>User Score: {(movie.vote_average * 10).toFixed(0)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{getGenres(movie.genres)}</p>
          </div>
          <div>
            <p>Additional Information</p>
            <ul>
              <li>
                <Link to="cast">
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default MovieDetails;
