import { useState, useEffect } from "react";
import TrendingToday from "components/TrendingToday/TrendingToday";
import css from 'pages/Home/Home.module.css';

const API_KEY = "7962a1912dc39a09e22d58ae0351b8bc";
const URL = "https://api.themoviedb.org/3/trending/movie/day";

const Home = () => {
  const [trendingToday, setTrendingToday] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      let response = await fetch(`${URL}?api_key=${API_KEY}`);
      response = await response.json();
      setTrendingToday(response.results);
    };
    getTrending().catch(console.error);
  }, []);

  return (
    <div className={css.container}>
      <h2 className={css['trend-header']}>Trending Today</h2>
      <TrendingToday movies={trendingToday} />
    </div>
  );
};

export default Home;
