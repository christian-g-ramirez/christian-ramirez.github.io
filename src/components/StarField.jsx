import React from 'react';
import Star from './star';

const generateStars = (numStars) => {
  return Array.from({ length: numStars }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 10000,  }));
};

const StarField = ({ numStars }) => {
  const stars = generateStars(numStars);

  return (
    <div className="absolute w-full h-full inset-0 overflow-hidden z--10">
      {stars.map((star, index) => (
        <Star key={index} style={{ top: star.top, left: star.left }} delay={star.delay} />
    ))}
    </div>
  );
};

export default StarField;