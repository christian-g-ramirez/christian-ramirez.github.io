import React from 'react';

const Moon = () => {
  return (
    <div className="w-[350px] h-[350px] bg-moon-gradient rounded-full shadow-moon-inner relative animate-slow-rotate">
      <div className="absolute top-[40px] left-[80px] bg-crater-gradient w-crater-1 h-crater-1 rounded-crater-shape shadow-crater-inner transform rotate-crater-1"></div>
      <div className="absolute top-[200px] left-[150px] bg-crater-gradient w-crater-2 h-crater-2 rounded-crater-shape shadow-crater-inner transform rotate-crater-2"></div>
      <div className="absolute top-[150px] left-[230px] bg-crater-gradient w-crater-3 h-crater-3 rounded-crater-shape shadow-crater-inner transform rotate-crater-3"></div>
      <div className="absolute top-[250px] left-[100px] bg-crater-gradient w-crater-4 h-crater-4 rounded-crater-shape shadow-crater-inner transform rotate-crater-4"></div>
      <div className="absolute top-[100px] left-[60px] bg-crater-gradient w-crater-6 h-crater-6 rounded-crater-shape shadow-crater-inner transform rotate-crater-6"></div>
      <div className="absolute top-[50px] left-[270px] bg-crater-gradient w-crater-7 h-crater-7 rounded-crater-shape shadow-crater-inner transform rotate-crater-7"></div>
      <div className="absolute top-[220px] left-[280px] bg-crater-gradient w-crater-8 h-crater-8 rounded-crater-shape shadow-crater-inner transform rotate-crater-8"></div>
      <div className="absolute top-[60px] left-[150px] bg-texture-gradient w-[10px] h-[10px] rounded-full"></div>
      <div className="absolute top-[180px] left-[120px] bg-texture-gradient w-[15px] h-[15px] rounded-full"></div>
      <div className="absolute top-[220px] left-[180px] bg-texture-gradient w-[10px] h-[10px] rounded-full"></div>
      <div className="absolute top-[130px] left-[250px] bg-texture-gradient w-[8px] h-[8px] rounded-full"></div>
      <div className="absolute top-[90px] left-[300px] bg-texture-gradient w-[12px] h-[12px] rounded-full"></div>
    </div>
  );
};

export default Moon;