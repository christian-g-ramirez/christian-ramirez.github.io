import React from 'react';

const Header = () => {
  return (
    <nav className="bg-black text-white font-bold shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <a href="#home" className="text-5x1 font-bold relative z-50 cursor-pointer">Mi Portafolio</a>
        <div className="space-x-32 text-lg">
          <a href="#home" className="hover:text-gray-400 relative z-50 cursor-pointer">Sobre mi</a>
          <a href="#projects" className="hover:text-gray-400 relative z-50 cursor-pointer">Proyectos</a>
          <a href="#contact" className="hover:text-gray-400 relative z-50 cursor-pointer">Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;