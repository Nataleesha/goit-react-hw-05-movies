import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loader } from "./Loader";
import css from 'styles/Cast.module.css';
import imagePlug from 'img/blank.png';

const API_KEY = "7962a1912dc39a09e22d58ae0351b8bc";
const URL = "https://api.themoviedb.org/3/movie/";
const IMG_URL = "https://image.tmdb.org/t/p/w200";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const getCast = async () => {
      let response = await fetch(
        `${URL}${movieId}/credits?api_key=${API_KEY}&language=en-US`
      );
      response = await response.json();
      setCast(response.cast);
    };

    getCast();
  }, [movieId]);

  return (
    cast ? (<ul className={css.list}>
        {cast.map((actor) => {
          return (
            <li key={actor.id} className={css.item}>
              <img src={actor.profile_path ? `${IMG_URL}${actor.profile_path}` : imagePlug} alt={actor.name}></img>
              <div className={css.actor}>
                <h3>{actor.name}</h3>
                <p>Role: {actor.character}</p>
              </div>
            </li>
          );
        })}
      </ul>) : <Loader />
  );
};

export default Cast;
