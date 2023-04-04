import { Link } from "react-router-dom";
import css from 'styles/TrendingToday.module.css';

const TrendingToday = ({ movies }) => {
  return (
    <ul className={css.trends}>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TrendingToday;
