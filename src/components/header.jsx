import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    console.log("Header component rendered");

  return (
    <nav className="bg-black text-white font-bold shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" clLinkssName="text-5x1 font-bold">Mi Portafolio</Link>
        <div className="space-x-32 text-lg">
          <Link to="/" className="hover:text-gray-400">Sobre mi</Link>
          <Link to="/projects" className="hover:text-gray-400">Proyectos</Link>
          <Link to="/contact" className="hover:text-gray-400">Contacto</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;