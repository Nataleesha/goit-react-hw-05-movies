import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_KEY = "7962a1912dc39a09e22d58ae0351b8bc";
const URL = "https://api.themoviedb.org/3/movie/";
const IMG_URL = "https://image.tmdb.org/t/p/w300";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

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

  console.log(cast);

  return (
    <ul>
      {cast.map((actor) => {
        return (
          <li key={cast.id}>{cast.name}
            <img
              src={`${IMG_URL}${cast.profile_path}`}
              alt={cast.name}
            ></img>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
