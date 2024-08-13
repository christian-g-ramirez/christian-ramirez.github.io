import React from 'react';

const Star = ({ style }) => {
  return (
    <div className="absolute w-2 h-2 rounded-full bg-teal-50 animate-pulse hover:animate-none transform transition-transform duration-1000 hover:scale-150 hover:bg-yellow-300 delay-75" style={style}></div>
  );
};

export default Star;