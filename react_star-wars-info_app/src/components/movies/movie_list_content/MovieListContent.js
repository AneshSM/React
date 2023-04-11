import React from "react";

// styles
import movieDataCardStyle from "./MovieListContent_Style.module.css";

const MovieListContent = (props) => {
  const { title, id, openingText, director, releaseDate } = props.data;
  return (
    <div key={id} className={movieDataCardStyle["movie-card"]}>
      <header className={movieDataCardStyle["movie-card-head"]}>{title}</header>
      <main className={movieDataCardStyle["movie-card-content"]}>
        {openingText}
      </main>
      <footer className={movieDataCardStyle["movie-card-foot"]}>
        <span>Directed By: {director}</span>
        <span>Released on: {releaseDate}</span>
      </footer>
    </div>
  );
};

export default MovieListContent;
