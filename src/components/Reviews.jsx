import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import css from 'styles/Reviews.module.css';

const API_KEY = "7962a1912dc39a09e22d58ae0351b8bc";
const URL = "https://api.themoviedb.org/3/movie/";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const gerReviews = async () => {
      let response = await fetch(
        `${URL}${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      );
      response = await response.json();
      setReviews(response.results);
    };
    gerReviews();
  }, [movieId]);

  return reviews ? (
    <ul>
      {reviews.map((review) => {
        return (
          <li key={review.id} className={css.item}>
            <h3>{review.author}:</h3>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No Reviews</p>
  );
};

export default Reviews;
