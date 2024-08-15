import React, { useEffect, useState } from 'react';
import ShootingStar from './ShootingStar';

const generateShootingStar = () => ({
  id: Math.random(),
  style: {
    top: `${Math.random() * 100}vh`,
    left: `${Math.random() * 100}vw`,
  },
  delay: Math.random() * 1000,
});

const ShootingStarField = ({ numStars }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStars((stars) => [...stars, generateShootingStar()]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      {stars.map((star) => (
        <ShootingStar key={star.id} style={star.style} delay={star.delay} />
      ))}
    </div>
  );
};

export default ShootingStarField;