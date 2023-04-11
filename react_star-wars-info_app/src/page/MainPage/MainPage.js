import React, { useState } from "react";

// Components
import { MovieList } from "../../components/movies";

// Styles
import mainPageStyle from "./MainPage_Style.module.css";

const MainPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMovieHandler() {
    setIsLoading(true);
    try {
      const response = await fetch("https://swapi.py4e.com/api/films");

      if (!response.ok) throw new Error("Something went wrong");

      const data = await response.json();

      const transformedData = data.results.map((movie) => {
        return {
          title: movie.title,
          id: movie.episode_id,
          openingText: movie.opening_crawl,
          director: movie.director,
          releaseDate: movie.release_date,
        };
      });
      setMovies(transformedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  let content = "";
  if (error) content = error;
  else if (isLoading) content = "Loading...";
  else if (movies.length === 0) content = "no movies available";
  else content = <MovieList list={movies} />;

  return (
    <>
      <div className={mainPageStyle["root"]}>
        <header className={mainPageStyle["main-header"]}>
          <h1>Star War's Movies</h1>
          <button
            className={mainPageStyle["button"]}
            onClick={fetchMovieHandler}
          >
            Fetch Movies
          </button>
        </header>
        <main className={mainPageStyle["main"]}>{content}</main>
      </div>
    </>
  );
};

export default MainPage;
