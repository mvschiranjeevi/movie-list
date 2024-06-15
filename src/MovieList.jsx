// MovieList.js
import React from "react";
import PropTypes from "prop-types";
import RenderStars from "./RenderStars";

const MovieList = ({ movies }) => (
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

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;
