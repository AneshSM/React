import React from "react";

// components
import MovieListContent from "../movie_list_content/MovieListContent";

// styles
import movieListStyle from "./MovieList_Style.module.css";

const MovieList = (prop) => {
  return (
    <>
      <div className={movieListStyle["movie-list"]}>
        {prop.list.map((movie) => {
          return <MovieListContent data={movie} />;
        })}
      </div>
    </>
  );
};

export default MovieList;
