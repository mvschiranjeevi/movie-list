import React from "react";
import RenderStars from "./RenderStars";

const MovieList = ({ movies }) => {
  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <li key={movie.title} className="movie-item">
          <div>
            <div className="movie-title">{movie.title}</div>
            <div className="movie-rating">
              <RenderStars rating={movie.rating} />
            </div>
          </div>
          <div className="movie-category">{movie.category}</div>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
