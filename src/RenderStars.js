import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons";

const RenderStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 10 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
        ))}
      {halfStar && (
        <FontAwesomeIcon icon={faStarHalfAlt} className="star-icon" />
      )}
      {Array(emptyStars)
        .fill()
        .map((_, i) => (
          <FontAwesomeIcon key={i} icon={faEmptyStar} className="star-icon" />
        ))}
    </>
  );
};

export default RenderStars;
