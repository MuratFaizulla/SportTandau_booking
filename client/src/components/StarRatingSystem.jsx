import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function StarRating() {
  const [rating, setRating] = useState(0); // Initial state set to 0

  const handleRatingChange = (currentRate) => {
    setRating(currentRate);
  };

  return (
    <>
      {[...Array(5)].map((_, index) => {
        const currentRate = index + 1;
        return (
          <span key={index}>
            <input
              type="radio"
              name="rate"
              value={currentRate}
              onChange={() => handleRatingChange(currentRate)}
              style={{ display: 'none' }}
            />
            <FaStar
              size={20}
              color={currentRate <= rating ? 'yellow' : 'grey'}
              onClick={() => handleRatingChange(currentRate)}
              style={{ cursor: 'pointer' }}
            />
          </span>
        );
      })}
    </>
  );
}
