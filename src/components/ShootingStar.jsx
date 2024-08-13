import React from 'react';

const ShootingStar = ({ style, delay }) => {
  return (
    <div
      className="absolute w-2 h-2 bg-white rounded-full animate-shooting-star"
      style={{ ...style, animationDelay: `${delay}ms` }}
    ></div>
  );
};

export default ShootingStar;