import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import css from "components/SearchForm/SearchForm.module.css";
import QueryList from "components/QueryList/QueryList";

const API_KEY = "7962a1912dc39a09e22d58ae0351b8bc";
const URL = "https://api.themoviedb.org/3/search/movie";

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResult, setSearchResult] = useState(null);
  const queryValue = searchParams.get("q") ?? "";

  const updateQueryEntry = (evt) => {
    evt.target.value === ""
      ? setSearchParams({})
      : setSearchParams({ q: evt.target.value });
  };

  const getQueryResults = async () => {
    let response = await fetch(
      `${URL}?api_key=${API_KEY}&language=en-US&query=${queryValue}&page=1&include_adult=false`
    );
    response = await response.json();
    setSearchResult(response.results);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    getQueryResults().catch(console.error);
  };

  return (
    <div>
      <div className={css.searchbar}>
        <form className={css.form} onSubmit={submitHandle}>
          <button type="submit" className={css["search-button"]}>
            <span className={css["button-label"]}>Search</span>
          </button>

          <input
            className={css.input}
            onChange={updateQueryEntry}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
          />
        </form>
      </div>

      {searchResult && searchResult.length > 0 ? (
        <QueryList movies={searchResult} />
      ) : null}
    </div>
  );
};

export default SearchForm;
