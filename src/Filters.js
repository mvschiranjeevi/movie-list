import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import RenderStars from "./RenderStars";

const Filters = ({
  activeFilter,
  setActiveFilter,
  selectedRatings,
  handleRatingChange,
  selectedCategories,
  handleCategoryChange,
}) => {
  return (
    <div className="filter-and-options">
      <div className="filters">
        <button
          onClick={() =>
            setActiveFilter(activeFilter === "rating" ? null : "rating")
          }
        >
          Rating
          <FontAwesomeIcon
            icon={activeFilter === "rating" ? faChevronUp : faChevronDown}
            style={{ marginLeft: "30px" }}
          />
        </button>
        <button
          onClick={() =>
            setActiveFilter(activeFilter === "genre" ? null : "genre")
          }
        >
          Genre
          <FontAwesomeIcon
            icon={activeFilter === "genre" ? faChevronUp : faChevronDown}
            style={{ marginLeft: "30px" }}
          />
        </button>
      </div>
      {activeFilter === "rating" && (
        <div className="filter-content">
          <label>
            <input
              type="checkbox"
              checked={selectedRatings.length === 0}
              onChange={() => handleRatingChange([])}
            />
            Any rating
          </label>
          {[...Array(10).keys()].map((rating) => (
            <label key={rating + 1}>
              <input
                type="checkbox"
                checked={selectedRatings.includes(rating + 1)}
                onChange={() => handleRatingChange(rating + 1)}
              />
              <RenderStars rating={rating + 1} />
            </label>
          ))}
        </div>
      )}
      {activeFilter === "genre" && (
        <div className="filter-content">
          <label>
            <input
              type="checkbox"
              checked={selectedCategories.length === 0}
              onChange={() => handleCategoryChange([])}
            />
            Any genre
          </label>
          {["Action", "Comedy", "Thriller", "Drama"].map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filters;
