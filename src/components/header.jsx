import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    console.log("Header component rendered");

  return (
    <nav className="bg-gray-800 text-black shadow-lg">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Mi Portafolio</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-400">Inicio</Link>
          <Link to="/projects" className="hover:text-gray-400">Proyectos</Link>
          <Link to="/contact" className="hover:text-gray-400">Contacto</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;