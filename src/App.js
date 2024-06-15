import React, { useState } from "react";
import "./App.css";
import MovieList from "./MovieList";
import Filters from "./Filters";

const movies = [
  { title: "The Matrix", rating: 7.5, category: "Action" },
  { title: "Focus", rating: 6.9, category: "Comedy" },
  { title: "The Lazarus Effect", rating: 6.4, category: "Thriller" },
  { title: "Everly", rating: 5.0, category: "Action" },
  { title: "Maps to the Stars", rating: 7.5, category: "Drama" },
];

const App = () => {
  const [search, setSearch] = useState("");
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleRatingChange = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesRating =
      selectedRatings.length === 0 ||
      selectedRatings.includes(Math.floor(movie.rating));
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(movie.category);

    return matchesSearch && matchesRating && matchesCategory;
  });

  return (
    <div className="App">
      <h1>Movie Search</h1>
      <div className="search-and-filters">
        <div className="search-and-movies">
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Enter movie name"
            className="search-input"
          />
          <MovieList movies={filteredMovies} />
        </div>
        <Filters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          selectedRatings={selectedRatings}
          handleRatingChange={handleRatingChange}
          selectedCategories={selectedCategories}
          handleCategoryChange={handleCategoryChange}
        />
      </div>
    </div>
  );
};

export default App;
