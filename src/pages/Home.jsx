import React from 'react';
import perfilimagen2 from '../assets/perfilimagen2.png'

const Home = () => {
  return (
    <div className="bg-gradient-blue-night-to-sunset min-h-screen flex items-center justify-between">
      <div className="w-6/12 h-auto flex justify-center">
        <img src={perfilimagen2} alt="Profile" className="rounded-full w-64 h-auto object-cover" />
      </div>
      <div className="w-7/12">
        <h1 className="text-2xl text- text-white p-2 m-4">
          Hola, soy Christian Ramirez, desarrollador frontend con experiencia en la creación de aplicaciones web y móviles. Me especializo en el diseño y maquetado de interfaces, utilizando tecnologías como React, React Native, Tailwind CSS y Bootstrap. Además, tengo habilidades en la integración de backend utilizando Node.js y MongoDB, así como en la gestión de versiones con Git y GitHub. Mi objetivo es crear soluciones intuitivas y eficientes, enfocándome en la experiencia del usuario y la calidad del código.
        </h1>
      </div>
    </div>
  );
};
export default Home;